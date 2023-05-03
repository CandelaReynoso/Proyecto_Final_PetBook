const bcryptjs = require('bcryptjs'); // npm i bcryptjs
const { User } = require('../database/db');
const { Op } = require('sequelize');
const nodemailer = require('nodemailer');
const verifyRoleControler = require ("../controllers/verifyUserRollController.js")

const userHandlerGet = async (req, res) => {
    try {
        const { limit = 20, from = 0, nickname } = req.query;
        const { id } = req.params;
        
        let whereClause = {status: true};

        if(id){
            whereClause = {...whereClause, id};
        }

        if (nickname) {
            whereClause = { 
              ...whereClause,
              nickname: { [Op.iLike]: `%${nickname}%` } // Use the ilike operator to match any name that contains the search string
            };
          }
       
        const [totalRecords, users] = await Promise.all([
            User.count({where: whereClause}),
            User.findAll({
                where: whereClause,
                limit: Number.parseInt(limit,10),
                offset: Number.parseInt(from,10),
            })
        ])
        //console.log(users)
        res.status(200).json({totalRecords, users});

    } catch (error) {
        res.status(404).json({error: error.message});
    }
};


const userHandlerPost = async (req, res) => {
    try {
        
        const {nickname, email, password, role} = req.body;
        const newUser = {nickname, email, password, role};

        // encrypt password
        const salt = bcryptjs.genSaltSync(); // 10 rounds by default - bcryptjs method
        newUser.password = bcryptjs.hashSync( password, salt ); // bcryptjs method to encrypt
        
        //save in db
        const savedUser = await User.create(newUser)

        // create nodemailer transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'petbook5173@gmail.com',
                pass: process.env.PASSWORD // gmail app password
            }
            });

        // set up email options
        const mailOptions = {
            from: 'petbook5173@gmail.com',
            to: email,
            subject: 'Welcome to Petbook!',
            text: 'Thank you for registering with our app. We hope you enjoy using it, feel free to see all the pets!'
            };

        // send email
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });

        res.status(200).json({savedUser})

    } catch (error) {
        res.status(404).json({error: error.message});
    }
};

const userHandlerResetPassword = async (req, res) => {
    try {
        const { email } = req.body;
        
        // check if the user with the given email exists in the database
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        
        // generate a new password
        const newPassword = Math.random().toString(36).slice(-8);  
        
        // update the user's password in the database
        const salt = bcryptjs.genSaltSync();
        const hashedPassword = bcryptjs.hashSync(newPassword, salt);
        await User.update({ password: hashedPassword }, { where: { id: user.id } });
        
        // create nodemailer transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'petbook5173@gmail.com',
                pass: process.env.PASSWORD // gmail app password
            }
        });
        
        // set up email options
        const mailOptions = {
            from: 'petbook5173@gmail.com',
            to: email,
            subject: 'Password reset request',
            text: `Your new password is: ${newPassword}. Please use this password to log in and change it immediately.`
        };
        
        // send email
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
        
        res.status(200).json({ message: 'Password reset email sent' });
        
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

const userHandlerChangePassword = async (req, res) => {
    try {
        const id = req.params.id;
        const { oldPassword, newPassword, ...rest } = req.body;

        // Get user from database
        const user = await User.findOne({ where: { id } });

        // Validate old password
        const isOldPasswordValid = await bcryptjs.compare(oldPassword, user.password);

        if (!isOldPasswordValid) {
          return res.status(400).json({ message: "Old password is incorrect" });
        }

        // Hash new password
        const salt = bcryptjs.genSaltSync(); // 10 rounds by default - bcryptjs method
        const hashedPassword = bcryptjs.hashSync(newPassword, salt); // bcryptjs method to encrypt

        // Send password reset email
        const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'petbook5173@gmail.com',
          pass: process.env.PASSWORD // gmail app password
        }
        });
  
        const mailOptions = {
            from: 'petbook5173@gmail.com',
            to: user.email,
            subject: 'Password changed',
            text: `Your new password is: ${newPassword}. Please use this password to log in, do not share it.`
        };
  
        transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });

        // Update user in database
        const updatedUser = await User.update(
          { ...rest, password: hashedPassword },
          {
            where: { id },
            returning: true,
            plain: true,
          }
        );

        res.status(200).json({ updatedUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "internal server error" });
    }
};


const userHandlerPut = async (req, res) => {
    try {
        const id = req.params.id;
        const {password, google, email, ...rest} = req.body;

        // TODO validate vs db
        if ( password ) {
            const salt = bcryptjs.genSaltSync(); // 10 rounds by default - bcryptjs method
            rest.password = bcryptjs.hashSync( password, salt ); // bcryptjs method to encrypt
        }

        const updatedUser = await User.update(rest, {
            where: { id },
            returning: true,
            plain: true
        });

        res.status(200).json({updatedUser})
    } catch (error) {
        res.status(500).json({msg: 'internal server error'});
    }
    
};

const userHandlerDelete = async (req, res) => {
    try {
        const { id } = req.params;
        
        // code to delete permanently not recommended, we need to see who modifies db
        //const deletedUser = await User.destroy({where: {id: id}})
        
        // we better disable the user by changing the status to false and not showing it in get route
        const disableUser = await User.update({ status: false }, { where: { id: id },
            returning: true,
            plain: true
        });

        const authUser = req.user; // check auth

        res.status(200).json({disableUser, authUser}) // check auth delete later
    } catch (error) {
        res.status(404).json({error: error.message});
    }
};



const userHandlerVerifyAdminRole = async (req,res) =>{
const {id} = req.params
console.log(id);

try {
    const response = await verifyRoleControler(id)
    res.status(200).json(response)
} catch (error) {
    res.status(400).json(error)
}
}

module.exports = {
    userHandlerGet,
    userHandlerPost,
    userHandlerPut,
    userHandlerDelete,
    userHandlerVerifyAdminRole,
    userHandlerResetPassword,
    userHandlerChangePassword
}