//form con captcha. 
import React, {useState} from "react";
import {Formik,Form,Field,ErrorMessage} from 'formik';



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
            petname: '',
            availability: ''
        }}
        validate={(valores) => {
            let errores ={}
            //validacion para el nombre
            if(!valores.name){
              errores.name ='Please, enter your name!'
            } else if (!/^[a-zA-ZÀ-ÿ\s]{2,16}$/.test(valores.name)){ // 2 a 16 digitos aceptan letras mayúsculas y minúsculas, acentos y espacios.
              errores.name = 'Name can only contain letters and spaces.'
            }
            //validacion nombre de la mascota
            if(!valores.petname){
              errores.petname ='Please, enter your name!'
            } else if (!/^[a-zA-ZÀ-ÿ\s]{2,16}$/.test(valores.petname)){ // 4 a 16 digitos y solo numeros, letras y guion _
              errores.petname = 'Name can only contain letters and spaces.'
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
            } else if (!/^[a-zA-Z]{1,150}$/.test(valores.message)){ 
              errores.message= 'Please enter a message with a maximum of 150 word, not numbers allowed!'
            }

            
            return errores;
            
        }}
        onSubmit={(valores, {resetForm}) => {
            resetForm();
            console.log('Form was send!');
            setFormSubmit(true);
            setTimeout(() => setFormSubmit(false), 4000) // para q desaparezca el mensaje en un tantos segundos.

            // aqui hay que conectarse a la base de datos y enviar los valores.
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
             <label htmlFor="petname">Pet Name:</label>
             <Field
             type ="text" 
             id="petname" 
             name="petname" 
             placeholder = "" 
             /> 
             <ErrorMessage name="petname" component={()=> (
                <div className="text-error">{errors.petname}</div>
              )}/>
         </div>
         <div>
      
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



