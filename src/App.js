import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
const App = ({ values, errors, touched, isSubmitting }) => {
  return (
    <Form>
      <div>
        {touched.email && errors.email && <p color='red'>{errors.email}</p>}
        <Field type='email' name='email' placeholder='E-mail' />
      </div>

      <br />
      <div>
        {touched.password && errors.password && (
          <p color='red'>{errors.password}</p>
        )}
        <Field type='password' name='password' placeholder='password' />
      </div>
      <br />
      <label>
        <Field type='checkbox' name='newsletter' checked={values.newsletter} />
        Subscribe to our weekly updates
      </label>
      <br />
      <label>
        Plan Type
        <Field component='select' name='plan'>
          <option value='Free'>Free</option>
          <option value='Premium'>Premium</option>
        </Field>
      </label>
      <br />
      <button disabled={isSubmitting}>Submit</button>
    </Form>
  );
};

const FormikApp = withFormik({
  mapPropsToValues({ email, password, newsletter, plan }) {
    return {
      email: email || '',
      password: password || '',
      newsletter: newsletter || false,
      plan: plan || 'Free'
    };
  },
  handleSubmit(values, { setErrors, setSubmitting, resetForm }) {
    setTimeout(() => {
      if (values.email === 'pb@gmail.com') {
        setErrors({ email: 'Email already exists' });
      } else {
        resetForm();
      }
      setSubmitting(false);
    }, 2000);
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email('Email Not Valid')
      .required('Email is required Feild'),
    password: Yup.string()
      .min(6, 'Password must be 6 char or longer')
      .required('Password is required Feild')
  })
})(App);

export default FormikApp;
