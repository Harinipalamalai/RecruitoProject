import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './viewapp.css'

function View() {
  const [taskData, setTaskData] = useState([]); // Fix variable name here

  useEffect(() => {
    const fetchTaskData = async () => {
      const token = localStorage.getItem('token');
      console.log(token);
      try {
        const response = await axios.get('http://localhost:8080/get', {
          headers: {
            "cache-control": 'no-cache',
            "Authorization": `Bearer ${token}`, // Add the token to the request headers
          },
        });

        setTaskData(response.data);
        console.log("response.data",response)
      } catch (error) {
        console.log(error);
      }
    };

    fetchTaskData();
  }, []);

  useEffect(() => {
    console.log(taskData); // This will log the updated dataList whenever it changes.
  }, [taskData]);

  return (
    <div>
      
      <table className="gen">
      <div className="container12">
        <thead>
          <tr className="form-title">
            <th className="header-cell">Job Id</th>
            <th className="header-cell">First Name</th>
            <th className="header-cell">Last Name</th>
            <th className="header-cell">Date of Birth</th>
            <th className="header-cell">Phone</th>
            <th className="header-cell">Address</th>
            <th className="header-cell">Email</th>
            <th className="header-cell">City</th>
            <th className="header-cell">Citizenship</th>
            <th className="header-cell">Zip</th>
          
          </tr>
        </thead>
        <tbody>
          {taskData.map((job) => (
            <tr key={job.jobid}>
                <td>{job.jobid}</td>
              <td>{job.firstname}</td>
              <td>{job.lastname}</td>
              <td>{job.dob}</td>
              <td>{job.phone}</td>
              <td>{job.email}</td>
              <td>{job.address}</td>
              <td>{job.city}</td>
              <td>{job.citizenship}</td>
              <td>{job.zip}</td>
            
              
            </tr>
          ))}
        </tbody>
        </div>
      </table>
    </div>
  );
}

export default View;