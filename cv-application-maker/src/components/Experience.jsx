import React, { useState } from "react";

const Experience = () => {
  const [company, setCompany] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

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
      <input type="submit" value="submit" />
    </div>
  );
};

export default Experience;
