
const isAdminRole = (req, res, next) => {

    if ( !req.user ) {
        return res.status(500).json({
            msg: 'token validation is required'
        })
    }

    const { role, nickname } = req.user;

    if ( role !== 'admin_role' ) {
        return res.status(401).json({
            msg: `${nickname} is not admin, not allowed.`
        })
    }

    next();
}


const isRole = ( ...roles ) => {
    return (req, res, next) => {
        //console.log(roles, req.user.role);

        if ( !req.user ) {
            return res.status(500).json({
                msg: 'token validation is required'
            })
        }

        if ( !roles.includes(req.user.role) ) {
            return res.status(401).json({
                msg: `service requires one of this roles ${roles}`
            })
        }

        next();
    }
}


module.exports = {
    isAdminRole,
    isRole
}