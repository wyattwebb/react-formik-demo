import React from 'react';
import { Formik, Field } from 'formik';


function App() {

  const data = {
    firstName: "Initial Data"
  }
  const errors = {
    firstName: "First Name Is Invalid"
  }

  function formSubmit(values, actions) {
    setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
        actions.setErrors(errors);
      }, 200);
  }

  return (
    <div className="no-response" style={{border:"1px solid black", padding:"10px", margin:"10px"}}>
      <h1>Formik Fields</h1>
      <Formik
      initialValues={data}
      onSubmit={formSubmit}
      > 
      {props => (

      <form onSubmit={props.handleSubmit}>
        <Field type="text" name="firstName"/>
        {props.errors.firstName && <div style={{color:"red", fontSize:"11px"}}>{props.errors.firstName}</div>}
        <button type="submit">Submit</button>
        <div>
          {!props.dirty ? "isPristine:true" : "isPristine: false"}
        </div>
      </form>
      )}</Formik>
    </div>
  );
}

App.propTypes = {};

export default App;

