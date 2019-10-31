import React from 'react';
import { withFormik, Form, Field } from 'formik';
import Yup from 'yup';
const App = ({ values }) => {
  return (
    <Form>
      <Field type='email' name='email' placeholder='E-mail' />
      <br />
      <Field type='password' name='password' placeholder='password' />
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
      <button onSubmit={() => {}} type='submit'>
        Submit
      </button>
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
  handleSubmit(values) {
    console.log(values);
  }
})(App);

export default FormikApp;
