import React, { useState } from "react";

const Education = () => {
  const [schoolName, setSchoolName] = useState('');
  const [study, setStudy] = useState('');
  const [graduationDate, setGraduationDate] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = () => {
    // Collect form data
    const formData = {
      schoolName,
      study,
      graduationDate,
    };

    // Store the submitted data
    setSubmittedData(formData);

    // Clear form fields
    setSchoolName('');
    setStudy('');
    setGraduationDate('');
  };

  return (
    <div>
      <h2>Education Travail</h2>
      <label>School Name:</label>
      <input
        type="text"
        value={schoolName}
        onChange={(e) => setSchoolName(e.target.value)}
      /><br />
      <label>Study:</label>
      <input
        type="text"
        value={study}
        onChange={(e) => setStudy(e.target.value)}
      /><br />
      <label>Graduation Date:</label>
      <input
        type="text"
        value={graduationDate}
        onChange={(e) => setGraduationDate(e.target.value)}
      /><br />
      <input type="button" value="edit" />
      <input type="submit" onClick={handleSubmit} value="submit" />

      {/* Display submitted data */}
      {submittedData && (
        <div>
          <p>School Name: {submittedData.schoolName}</p>
          <p>Study: {submittedData.study}</p>
          <p>Graduation Date: {submittedData.graduationDate}</p>
        </div>
      )}
    </div>
  );
};

export default Education;
