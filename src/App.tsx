import { Form, Formik } from 'formik';
import React from 'react';
import { Button } from './components /Button';
import { Checkbox } from './components /Checkbox';
import { Header } from './components /Header';
import { Input } from './components /Input';
import { subTasks } from './mock';
import PlatformLaunch  from './pages/platform-launch';
import { ViewTask } from './screens /ViewTask';

function App() {
  return (
    <div style={{ width: "100%", height: "100vh", backgroundColor: "#F4F7FD", overflow: "hidden"}}>
      <Header headerTitle='Platform Launch' />

        <PlatformLaunch/>

      {/* <ViewTask subTasks={subTasks} heading='Research pricing points of various competitors and trial different business models' description="We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition." /> */}

      {/* <Formik initialValues={{
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
      </Formik> */}
    </div>
  );
}

export default App;
