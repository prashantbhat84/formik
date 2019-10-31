import React, { Fragment } from 'react';
import { withFormik } from 'formik';
import Yup from 'yup';
const App = ({ values, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='email'
        name='email'
        placeholder='E-mail'
        value={values.email}
        onChange={handleChange}
      />
      <br />
      <input
        type='password'
        name='password'
        placeholder='password'
        value={values.password}
        onChange={handleChange}
      />
      <button onSubmit={() => {}}>Submit</button>
    </form>
  );
};

const FormikApp = withFormik({
  mapPropsToValues({ email, password }) {
    return {
      email: email || '',
      password: password || ''
    };
  },
  handleSubmit(values) {
    console.log(values);
  }
})(App);

export default FormikApp;
