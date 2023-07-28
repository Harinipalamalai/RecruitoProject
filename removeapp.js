import React, { useState } from 'react';
import './remove.css'; 
import axios from 'axios';

const EventForm = () => {
  const [jobid, setjobid] = useState('');
  const [taskDeleted, setTaskDeleted] = useState(false);
  const [notification, setNotification] = useState('');
  const [formError, setFormError] = useState('');



    const handleDeleteTask = async (e) => {
      e.preventDefault();
      const token = localStorage.getItem('token');
  
      // Check if the token is available and valid
      if (!token) {
        console.log('No token found. Redirect to login page or handle the error.');
        return;
      }
  
      const jobid = e.target.elements.jobid.value;
  
      try {
        await axios.delete(`http://127.0.0.1:8080/delete/${jobid}`, {
          headers: {
            Authorization: `Bearer ${token}`, // Add the token to the request headers
          },
        });
  
        setTaskDeleted(true);
        window.alert("Application shortlisted!")
      } catch (error) {
        console.error(error);
        // Handle the error appropriately, such as showing an error message to the user
      }
    };
  

  return (
    <div className='deleteba'>
    <div className="event-form-container">
      <h1>Delete Application</h1><br></br><br></br>
      <form onSubmit={handleDeleteTask}>
        <div>
          <label htmlFor="jobid">Job ID:</label>
          <input
            type="text"
            id="jobid"
            value={jobid}
            onChange={(e) => setjobid(e.target.value)}
          />
        </div>
        {formError && <p className="error-message">{formError}</p>}
        <button type="submit">Submit</button>
      </form>
      {notification && <p className='submitlaba'>{notification}</p>}
    </div>
    </div>
  );
};

export default EventForm;