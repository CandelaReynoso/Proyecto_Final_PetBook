//form con captcha. 
import React, {useState} from "react";
import {Formik,Form,Field,ErrorMessage} from 'formik';



const FormAdoption = () => {
    const[formSubmit, setFormSubmit] = useState(false);

    return (
        <>
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
            } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.name)){ // 4 a 16 digitos y solo numeros, letras y guion _
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
         <Form className="form">
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
                <div className="error">{errors.name}</div>
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
              <div className="error">{errors.lastname}</div>
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
              <div className="error">{errors.email}</div>
            )}/>
         </div>
         <div>
             <label htmlFor="pet">Pet Name:</label>
             <Field
             type ="text" 
             id="pet" 
             name="pet" 
             placeholder = "" 
             /> 
             <ErrorMessage name="pet" component={()=> (
                <div className="error">{errors.pet}</div>
              )}/>
         </div>
         <div>
             <label htmlFor="availability">Availability for a visit:</label>
             <Field
             type ="text" 
             id="availability" 
             name="availability"
             placeholder = "" 
             />
             <ErrorMessage name="availability" component={()=> (
                <div className="error">{errors.availability}</div>
              )}/>
         </div>
         <div>
         <p>Message:</p>
            <Field 
            name="message" 
            as="textarea" 
            pleaceholder="Leve you additional comments"
            />        
         </div>
         <button type ="submit">SEND</button>
         { formSubmit && <p className="succes">Form was successfully submitted</p>}
     </Form>
            )}
       
        </Formik>
        </>

    )
}

export default FormAdoption;



/* import React, {useState} from "react";
import {Formik} from 'formik';



const FormAdoption = () => {
    const[formSubmit, setFormSubmit] = useState(false);

    return (
        <>
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
            } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.name)){ // 4 a 16 digitos y solo numeros, letras y guion _
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

            return errores;
            
        }}
        onSubmit={(valores, {resetForm}) => {
            resetForm();
            console.log('Form was send!');
            setFormSubmit(true);
            setTimeout(() => setFormSubmit(false), 4000) // para q desaparezca el mensaje en un tantos segundos.

            // aqui hay que conectarse a la base de datos y enviar los valores.
        }}>
            {( {values, errors, touched, handleSubmit, handleChange, handleBlur}  ) => (
         <form className="" onSubmit={handleSubmit}>
            {console.log(errors)}
         <div>
             <label htmlFor="name">Name:</label>
             <Field
             type ="text" 
             id="name" 
             name="name" 
             placeholder = "Chris" 
           //cuando el usuario hace click fuera del Fieldse ejecuta el alert(Validation)
             />
             {touched.name && errors.name && <div className="error">{errors.name}</div>} 
         </div>
         <div>
             <label htmlFor="lastname">Last name:</label>
             <Field
             type ="text" 
             id="lastname" 
             name="lastname" 
             placeholder = "Rock" 
             value={values.lastname}
             onChange={handleChange}
             onBlur={handleBlur}
             />
            {touched.lastname && errors.lastname && <div className="error">{errors.lastname}</div>} 
         </div>
         <div>
             <label htmlFor="email">Email:</label>
             <Field
             type ="email" 
             id="email" 
             name="email" 
             placeholder = "email@email.com" 
             value={values.email}
             onChange={handleChange}
             onBlur={handleBlur}
             />
             {touched.email && errors.email && <div className="error">{errors.email}</div>}
         </div>
         <div>
             <label htmlFor="pet">Pet Name:</label>
             <Field
             type ="text" 
             id="pet" 
             name="pet" 
             placeholder = "Bobby" 
             value={values.petname}
             onChange={handleChange}
             onBlur={handleBlur}
             />
             {touched.petname && errors.petname && <div className="error">{errors.petname}</div>}
         </div>
         <div>
             <label htmlFor="availability">Availability for a visit:</label>
             <Field
             type ="text" 
             id="availability" 
             name="availability"
             placeholder = "Monday to Friday,6 to 8pm." 
             value={values.availability}
             onChange={handleChange}
             onBlur={handleBlur}
             />
             {touched.availability && errors.availability  && <div className="error">{errors.availability}</div>}
         </div>
         <button type ="submit">SEND</button>
         { formSubmit && <p className="exito">Form was successfully submitted</p>}
     </form>
            )}
       
        </Formik>
        </>

    )
}

export default FormAdoption; */