//form con captcha. 
import React, {useState} from "react";
import {Formik,Form,Field,ErrorMessage} from 'formik';
//Este fomr lo puede llenar un usario registrado o on registrado y el administrador va a recibir un email.
//Una vez que el usuario complete el formulario y haga clic en "enviar", puedes usar la función "fetch" de JavaScript para enviar una solicitud POST al servidor.
import { sendEmail } from "../../Redux/actions";

const FormContact = () => {
    const[formSubmit, setFormSubmit] = useState(false);

    return (
        <>
        <div>
          <h1 className="subtitle">CONTACT US</h1>
        </div>
        <Formik
        initialValues={{
            name: '',
            lastname : '',
            email:'',
            message: '', 
        }}
        validate={(valores) => {
            let errores ={}
            //validacion para el nombre
            if(!valores.name){
              errores.name ='Please, enter your name!'
            } else if (!/^[a-zA-ZÀ-ÿ\s]{2,16}$/.test(valores.name)){ // 2 a 16 digitos aceptan letras mayúsculas y minúsculas, acentos y espacios.
              errores.name = 'Name can only contain letters and spaces.'
            }
          
            //validacion para el apellido
            if(!valores.lastname){
                errores.lastname ='Please, enter your Last name!'
            } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.lastname)){ // 4 a 16 digitos y solo numeros, letras y guion _
              errores.lastname = 'Last name can only contain letters and spaces.'
            }

            //validacion para el email
            if(!valores.email){
                errores.email ='Please, enter your email!'
            } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)){ // 4 a 16 digitos y solo numeros, letras y guion _
              errores.email = 'Email can only contain letters,spaces and piriods.'
            }
            //validacion mensaje
            if(!valores.message){
              errores.message ='Please, enter your message!'
            } else if (!/^[a-zA-Z ]{1,150}$/.test(valores.message)){ 
              errores.message= 'Please enter a message with a maximum of 150 word, not numbers allowed!'
            }

            
            return errores;
            
        }}
       // Esta logica fue transladada a la action 
       /*  onSubmit={(values, {resetForm}) => {
          try {
            const tokenString = localStorage.getItem('token');
            console.log('tokenString:', tokenString); // add this line
            //const token = JSON.parse(tokenString);
            //if (!tokenString) {
            //  throw new Error('No token found in localStorage');
            //}
          
            resetForm();
            console.log('Form was sent!');
            setFormSubmit(true);
            setTimeout(() => setFormSubmit(false), 4000);
            const header = `'x-token': tokenString`;
            const headers = { 'Content-Type': 'application/json' };
            console.log('headers:', headers); // add this line
            fetch('http://localhost:3001/contact', {
              method: 'POST',
              headers: headers,
              body: JSON.stringify(values)
            })
            .then(response => {
              if (response.ok) {
                setFormSubmit(true);
                setTimeout(() => setFormSubmit(false), 4000);
                resetForm();
              } else {
                throw new Error('Network response was not ok');
              }
            })
            .catch(error => {
              
              console.error('There was a problem with the form submission:', error);
            });
          } catch (error) {
            console.error('There was a problem retrieving the token:', error);
          }
        }}
         */
        onSubmit={(values, {resetForm}) => {
          setFormSubmit(true);
          sendEmail(values.name, values.lastname, values.email, values.message)
          .then(() => {
          console.log('Form was sent!');
          setTimeout(() => setFormSubmit(false), 4000);
          resetForm();
        })
        .catch((error) => {
          console.error('Error sending email:', error);
          setTimeout(() => setFormSubmit(false), 4000);
        });
    }}
        >

            {( {errors}  ) => (
              
         <Form className="textColorGreen textItalic text-center">
            {console.log(errors)}
         <div>
             <label htmlFor="name">Name:</label>
             <Field
             type ="text" 
             id="name" 
             name="name" 
             placeholder = "" 
     
             />
            <ErrorMessage name="name" component={()=> (
                <div className="text-error">{errors.name}</div>
            )}/>
         </div>
         <div>
             <label htmlFor="lastname">Last name:</label>
             <Field
             type ="text" 
             id="lastname" 
             name="lastname" 
             placeholder = "" 
             />
             <ErrorMessage name="lastname" component={()=> (
              <div className="text-error">{errors.lastname}</div>
            )}/>
         </div>
         <div>
             <label htmlFor="email">Email:</label>
             <Field
             type ="email" 
             id="email" 
             name="email" 
             placeholder = "email@email.com" 
             />
             <ErrorMessage name="email" component={()=> (
              <div className="text-error">{errors.email}</div>
            )}/>
         </div>
         <div>
         <p>Send us a message:</p>
            <Field 
            className="textareas"
            name="message" 
            as="textarea" 
            />    
            <ErrorMessage name="message" component={()=> (
                <div className="text-error">{errors.message}</div>
              )}/>    
         </div>
         <div className="buttonSubtmit text-center ">
            <button className=""  type ="submit ">SEND</button>
         { formSubmit && <p className="succes">Form was successfully submitted</p>}
         </div>
       
     </Form>
            )}
       
        </Formik>
        </>

    )
}

export default FormContact;



