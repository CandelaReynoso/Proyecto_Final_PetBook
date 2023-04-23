import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { sendAdoptionRequest } from '../../Redux/actions';

const adoptionSchema = Yup.object().shape({
  petName: Yup.string().required('Nombre de la mascota requerido'),
  message: Yup.string().required('Mensaje requerido'),
});

const AdoptionForm = () => {
  const dispatch = useDispatch();
  const userEmail = useSelector((state) => state.userEmail);
  const formik = useFormik({
    initialValues: {
      petName: '',
      message: '',
    },
    validationSchema: adoptionSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        await dispatch(sendAdoptionRequest(userEmail, values.petName, values.message));
        resetForm();
      } catch (error) {
        console.error(error);
      }
      setSubmitting(false);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="petName">Pet Name:</label>
        <input
          id="petName"
          name="petName"
          type="text"
          value={formik.values.petName}
          onChange={formik.handleChange}
        />
        {formik.touched.petName && formik.errors.petName ? (
          <div>{formik.errors.petName}</div>
        ) : null}
      </div>

      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          type="text"
          value={formik.values.message}
          onChange={formik.handleChange}
        />
        {formik.touched.message && formik.errors.message ? (
          <div>{formik.errors.message}</div>
        ) : null}
      </div>

      <button type="submit" disabled={formik.isSubmitting}>
       SEND
      </button>
    </form>
  );
};

export default AdoptionForm;