import React from 'react';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';

const LoginPage = () => (
  <div>
    <Formik
      initialValues={{ username: '', password: '' }}
      onSubmit={({ username, password }) => {
        axios
          .post('http://localhost:9000/api/user/login', {
            username,
            password,
          })
          .then(() => console.log('Login successful'))
          .catch(err => console.log(err));
      }}
    >
      {() => (
        <Form>
          <Field name="username" type="text" />
          <Field name="password" type="password" />
          <button type="submit">sign in</button>
        </Form>
      )}
    </Formik>
  </div>
);

export default LoginPage;
