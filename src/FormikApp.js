import React from 'react';
import { Formik } from 'formik';


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
      <h1>Formik</h1>
      <Formik
      initialValues={data}
      onSubmit={formSubmit}
      > 
      {props => (

      <form onSubmit={props.handleSubmit}>
        <input type="text" 
            value={props.values.firstName} 
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            name="firstName"/>
            
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

