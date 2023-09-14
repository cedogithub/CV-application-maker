import React, { useState } from "react";

const GeneralInfo = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = () => {
    // Collect form data
    const formData = { name, email, phone };
    console.log(formData);

    // Store the submitted data
    setSubmittedData(formData);

    // Clear form fields
    setName('');
    setEmail('');
    setPhone('');
  };

  return (
    <div>
      <h2>General Information</h2>
      <label>Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      /><br />
      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /><br />
      <label>Phone:</label>
      <input
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      /><br />
      <input type="button" value="edit" />
      <input type="submit" onClick={handleSubmit} value="submit" />

      {/* Display submitted data */}
      {submittedData && (
        <div>
          <p>Name: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
          <p>Phone: {submittedData.phone}</p>
        </div>
      )}
    </div>
  );
};

export default GeneralInfo;
