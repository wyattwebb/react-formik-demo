import React, { useState } from 'react';


function App() {

  const data = {
    firstName: "Initial Data"
  }
  const errors = {
    firstName: undefined
  }

  const [textValue, setTextValue] = useState(data.firstName);
  const [isPristine, setIsPristine] = useState(true);
  const [serverErrors, setServerErrors] = useState(errors);

  function updateForm(name, value){
    console.log(value);
    console.log(name);
    if (name === "FirstName"){
      setTextValue(value);
    }
    setIsPristine(false);
  }

  function formSubmit(e){
    if (e){
      e.preventDefault();
    }
    
    setServerErrors({firstName: `First Name Can NOT be: ${textValue}` })
    setIsPristine(true);
  }

  return (
    <div className="no-response" style={{border:"1px solid black", padding:"10px", margin:"10px"}}>
      <h1>No Formik</h1>
      <form onSubmit={formSubmit}>
        <input type="text" value={textValue} onChange={e => updateForm("FirstName", e.target.value)} id="FirstName"/>
        {serverErrors && serverErrors.firstName && (
        <div style={{color:"red", fontSize:"11px"}}>
          * {serverErrors.firstName}
        </div>

        )}
        <button type="submit" onClick={formSubmit}>Submit</button>
        <div>
          {isPristine ? "isPristine:true" : "isPristine: false"}
        </div>
      </form>
    </div>
  );
}

App.propTypes = {};

export default App;

