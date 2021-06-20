import React from "react";

function Step1(props) {
  return (
    <div>
      <p>First Name: <input name="name" value={props.getState('name', '')} onChange={props.handleChange} /></p>
      <p>Last Name: <input name="surname" value={props.getState('surname', '')} onChange={props.handleChange} /></p>
      <p>Email: <input name="email" value={props.getState('email', '')} onChange={props.handleChange} /></p>
      <p>Phone: <input name="phone" value={props.getState('phone', '')} onChange={props.handleChange} /></p>
      <p>Github: <input name="github" value={props.getState('github', '')} onChange={props.handleChange} /></p>
      <p>LinkedIn: <input name="linkedin" value={props.getState('linkedin', '')} onChange={props.handleChange} /></p>
      <button onClick={props.prev}>Previous</button>
      <button onClick={props.next}>Next</button>
    </div>
  );
}

export default Step1;