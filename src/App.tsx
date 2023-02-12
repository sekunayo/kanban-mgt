import { Form, Formik } from 'formik';
import React from 'react';
import { Button } from './components /Button';
import { Checkbox } from './components /Checkbox';
import { Header } from './components /Header';
import { Input } from './components /Input';

function App() {
  return (
    <div style={{ width: "100%", height: "100vh"}}>
      <Header headerTitle='Platform Launch' />

      <Formik initialValues={{
        email: '',
        firstName: 'red',
        lastName: '',
      }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}

      >
        <Form>
          <Input name="example" type="text" label="Text Field (Idle)" placeholder='Enter Text' />
          <Checkbox name="testing" label="Testing" />
        </Form>
      </Formik>
    </div>
  );
}

export default App;
