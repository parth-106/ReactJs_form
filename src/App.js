import React, { useState } from "react";

const App = () => {
  const [fullName, setFullName] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
  });

  const inputEvent = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);

    const value = event.target.value;
    const name = event.target.name;

    setFullName((preValue) => {
      if (name === "FName") {
        return {
          fname: value,
          lname: preValue.lname,
          email: preValue.email,
          phone: preValue.phone,
        };
      } else if (name === "lName") {
        return {
          fname: preValue.fname,
          lname: value,
          email: preValue.email,
          phone: preValue.phone,
        };
      } else if (name === "emailId") {
        return {
          fname: preValue.fname,
          lname: preValue.lname,
          email: value,
          phone: preValue.phone,
        };
      } else if (name === "phoneNumber") {
        return {
          fname: preValue.fname,
          lname: preValue.lname,
          email: preValue.email,
          phone: value,
        };
      }
    });
  };
  const onSubmits = (event) => {
    event.preventDefault();
    alert("Form Submitted");
  };
  return (
    <>
      <div>
        <form onSubmit={onSubmits}>
          <p>✈️ Pls Give Your Details Here ✈️</p>
          <input
            type="text"
            placeholder="Enter Your Name"
            onChange={inputEvent}
            name="FName"
            value={fullName.fname}
          />
          <input
            type="text"
            placeholder="Enter Your Sername"
            onChange={inputEvent}
            name="lName"
            value={fullName.lname}
          />
          <input
            type="email"
            placeholder="Enter Your Email Id"
            onChange={inputEvent}
            name="emailId"
            value={fullName.email}
          />
          <input
            type="number"
            placeholder="Enter Your Mobile Number"
            onChange={inputEvent}
            name="phoneNumber"
            value={fullName.phone}
          />
          <br /> <br /> <br />
          <h1>
            <hr />
            Name = {fullName.fname}
            <hr />
            Sername = {fullName.lname}
            <hr />
            Email-id = {fullName.email}
            <hr />
            Number = {fullName.phone}
            <hr />
          </h1>
        </form>
      </div>
    </>
  );
};

export default App;
