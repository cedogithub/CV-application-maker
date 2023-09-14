import React, { useState } from "react";

const GeneralInfo = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    // Handle the submission of the general information here
    console.log("General Info Submitted:", name, email, phone);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h2>General Information</h2>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />
        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
        <br />
        <input type="button" value="edit" />
        <input type="submit" value="submit" />
      </div>
    </form>
  );
};

export default GeneralInfo;
