import React, { useState } from "react";

const Experience = () => {
  const [company, setCompany] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [submittedForm, setSubmittedForm] = useState(null);
  const handleSubmit = () =>{
    const formData = {company,jobTitle,startDate,endDate}

    setSubmittedForm(formData);

  }
  return (
    <div>

      <h2>Experience</h2>
      <label>Company Name:</label>
      <input
        type="text"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      /><br />
      <label>Job Title:</label>
      <input
        type="text"
        value={jobTitle}
        onChange={(e) => setJobTitle(e.target.value)}
      /><br />
      <label>Start Date:</label>
      <input
        type="text"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      /><br />
      <label>End Date:</label>
      <input
        type="text"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      /><br />
      <input type="button" value="edit" />
      <input type="submit" onClick={handleSubmit}value="submit" />
      {submittedForm && (
        <div>
          <p>Company name: {submittedForm.company}</p>
          <p>Job title: {submittedForm.jobTitle}</p>
          <p>Start date: {submittedForm.startDate}</p>
          <p>End date : {submittedForm.endDate}</p>
          </div>

      )}
    </div>
  );
};

export default Experience;
