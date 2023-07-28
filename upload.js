import React, { useState } from 'react';
import './upload.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Dashboard() {
  const navigate = useNavigate();
  const [applicationLetter, setApplicationLetter] = useState(null);
  const [curriculumVitae, setCurriculumVitae] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('applicationLetter', applicationLetter);
    formData.append('curriculumVitae', curriculumVitae);

    try {
      // Replace 'SEND_ADDRESS' with the API endpoint you want to send the form data to
      const response = await axios.post('SEND_ADDRESS', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Handle the response as needed (e.g., show a success message)
      console.log(response);

      // Navigate to the 'submitted' page after successful submission
      navigate('/submitted');
    } catch (error) {
      // Handle any errors that occur during the form submission
      console.error(error);
    }
  };

  return (
    <div>
      <header>
        <div class="logojsec">
          <Link to="/applynow">
            <img
              src="https://cdn-icons-png.flaticon.com/128/93/93634.png"
              className="bello"
              alt="logo"
            />
          </Link>
          <div class="logjo">Recurito</div>
        </div>
      </header>
      <div class="main-container">
        <div className="borderbox1">
          <div class="main">
            <div class="">
              <div class="row">
                <div class="col-12">
                  <div class="my-5">
                    <h3>REQUIRED DOCUMENTS</h3>
                    <br></br>
                    <br></br>
                  </div>
                  <form onSubmit={handleSubmit} id="ft-form" encType="multipart/form-data">
                    <fieldset>
                      <input type="hidden" name="MAX_FILE_SIZE" value="10485760"></input>
                      <div class="two-cols">
                        <label>
                          Application letter
                          <input
                            type="file"
                            name="applicationLetter"
                            accept=".doc,.docx,.pdf"
                            onChange={(e) => setApplicationLetter(e.target.files[0])}
                          />
                        </label>
                        <label>
                          Curriculum vitae
                          <input
                            type="file"
                            name="curriculumVitae"
                            accept=".doc,.docx,.pdf"
                            onChange={(e) => setCurriculumVitae(e.target.files[0])}
                          />
                        </label>
                      </div>
                    </fieldset>
                    <div class="btns">
                      <button type="submit" className="button-943">
                        SUBMIT
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
