import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Website = () => {
  const [requiredFields, setRequiredFields] = useState({
    firstName: false,
    birthDate: false,
    gender: false,
    jobPosition: false,
    billableHours: false,
    email: false,
    startTime: false,
    team: false,
    isBillable: false,
    lastName: false,
    phoneNumber: false,
    endTime: false,
    designation: false,
  });

  useEffect(() => {
    setRequiredFields(prevState => ({
      ...prevState,
      firstName: true,
      birthDate: true,
      gender: true,
      jobPosition: true,
      billableHours: true,
      email: true,
      startTime: true,
      team: true,
      isBillable: true,
      lastName: true,
      phoneNumber: true,
      endTime: true,
      designation: true,
    }));
  }, []);

  const inputStyle = (isRequired) => ({
    borderColor: isRequired ? 'red' : 'black',
    borderWidth: isRequired ? '2px' : '1px',
  });

  return (
    <div className="container">
      <h1>Employee Form</h1>
      <form>
        <div className="section">
          <div>
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" name="firstName" placeholder="Enter your first name" style={inputStyle(requiredFields.firstName)}/>
            <label htmlFor="birthDate">Birth Date</label>
            <input type="date" id="birthDate" name="birthDate" placeholder="Enter your DOB" style={inputStyle(requiredFields.birthDate)}/>
            <label htmlFor="gender">Select Gender</label>
            <select id="gender" name="gender" style={inputStyle(requiredFields.gender)}>
              <option disabled selected>Choose Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <label htmlFor="jobPosition">Job Position</label>
            <input type="text" id="jobPosition" name="jobPosition" placeholder="Enter the job position" style={inputStyle(requiredFields.jobPosition)}/>
            <label htmlFor="billableHours">Billable Hours</label>
            <input type="number" id="billableHours" name="billableHours" placeholder="Enter the billable hours" style={inputStyle(requiredFields.billableHours)}/>
          </div>
          <div>
            <label htmlFor="middleName">Middle Name</label>
            <input type="text" id="middleName" name="middleName" placeholder="Enter your middle name" style={inputStyle(false)}/>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" style={inputStyle(requiredFields.email)}/>
            <label htmlFor="startTime">Start Time</label>
            <input type="time" id="startTime" name="startTime" style={inputStyle(requiredFields.startTime)}/>
            <label htmlFor="team">Select Team</label>
            <select id="team" name="team" style={inputStyle(requiredFields.team)}>
              <option disabled selected>Select...</option>
              <option value="1">Team 1</option>
              <option value="2">Team 2</option>
            </select>
            <label htmlFor="isBillable">Is Billable</label>
            <input type="checkbox" id="isBillable" name="isBillable" style={inputStyle(requiredFields.isBillable)}/>
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" name="lastName" placeholder="Enter your last name" style={inputStyle(requiredFields.lastName)}/>
            <label htmlFor="phoneNumber">Phone Number</label>
            <input type="tel" id="phoneNumber" name="phoneNumber" placeholder="Enter your phone number" style={inputStyle(requiredFields.phoneNumber)}/>
            <label htmlFor="endTime">End Time</label>
            <input type="time" id="endTime" name="endTime" style={inputStyle(requiredFields.endTime)}/>
            <label htmlFor="designation">Select Designation</label>
            <select id="designation" name="designation" style={inputStyle(requiredFields.designation)}>
              <option disabled selected>Select...</option>
              <option value="projectManager">Project Manager</option>
              <option value="hr">HR</option>
            </select>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
ReactDOM.render(<Website />, document.getElementById('root'));
