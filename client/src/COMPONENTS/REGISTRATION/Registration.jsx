import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../Redux/actions';
import { useNavigate } from 'react-router-dom';
import Header from '../HEADER/Header';
import Footer from '../FOOTER/Footer';

const RegistrationSchema = Yup.object().shape({
  nickname: Yup.string().required('Nickname is required').matches(/^[A-Za-z]+$/, 'Nickname must contain only letters'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters long').max(10, 'Password must be at most 10 characters long').notOneOf(['123456'], 'Password cannot be 123456').required('Password is required'),
  repeatPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Repeat Password is required'),
});

const Registration = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values, { setSubmitting }) => {
    dispatch(registerUser(values));
    navigate('/login');
    setSubmitting(false);
  };

  return (
    <div>
      <Header />
      <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
        <div className='flex flex-col justify-center'>
          <Formik
            initialValues={{ nickname: '', email: '', password: '', repeatPassword: '', role: 'user_role' }}
            validationSchema={RegistrationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className='max-w-[400px] w-full mx-auto rounded-lg bg-white  p-4'>
                <h2 className='subtitle'>REGISTER.</h2>

                <div className='divForminput'>
                  <label>
                    <Field type='text' name='nickname' placeholder='Nickname' className='inputs' />
                  </label>
                  <ErrorMessage name='nickname' component='div' className='text-error' />
                </div>

                <div className='divForminput'>
                  <label>
                    <Field type='email' name='email' placeholder='Email' className='inputs' />
                  </label>
                  <ErrorMessage name='email' component='div' className='text-error' />
                </div>

                <div className='divForminput'>
                  <label>
                    <Field type='password' name='password' placeholder='Password' className='inputs' />
                  </label>
                  <ErrorMessage name='password' component='div' className='text-error' />
                </div>

                <div className='divForminput'>
                  <label>
                    <Field type='password' name='repeatPassword' placeholder='Repeat Password' className='inputs' />
                  </label>
                  <ErrorMessage name='repeatPassword' component='div' className='text-error' />
                </div>

                <button type='submit' disabled={isSubmitting} className='buttonSubtmit'>
                  {isSubmitting ? 'Submitting...' : 'Register'}
                </button>
              </Form>
              
              
            )}
            </Formik>
         

  </div> 

  
      {/* IMAGEN */}
      <div className='hidden sm:block place-items-center'>  
        <img className='w-full object-fill mt-9' src="/gatocompu.jpg" alt="" />
      </div>     
</div>
<div>
  <Footer />
</div>
</div>

  )};

export default Registration;
