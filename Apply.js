import React from 'react';
import './applied.css';
import './applynow';
import {Link} from 'react-router-dom';

function Applied() {
  const handleReadMoreClick = () => {
    const targetSection = document.getElementById('target-section');
    targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div>
      <div className="aboutpage">
        <div>
          <h3 className="firstjanu">Amazon</h3>
          <h3 className="fadeInUp"><img src="https://cdn-icons-png.flaticon.com/128/171/171322.png" className='book'></img>Job Type<br></br>Permanent Work</h3>
          <h3 className="fadeInUp2"><img src="https://cdn-icons-png.flaticon.com/128/2830/2830566.png" className='book2'></img>Salary<br></br>$130k/yr</h3>
          <h3 className="fadeInUp3"><img src="https://cdn-icons-png.flaticon.com/128/535/535239.png" className='book3'></img>Location<br></br>Bangalore,Karnataka</h3>
          <h1 className="fadeInUp4">Preferred Qualifiction<br></br></h1>
          <p className="fadeInUp4">Preferred qualifications help the hiring committee narrow the applicant pool by<br></br> identifying which
applicants are amongst the top candidates. Hiring committees<br></br> should use the preferred
qualifications to develop evaluation criteria.
Preferred<br></br> qualifications should list education, experience, and credentials beyond<br></br> the minimum
qualifications. Some example are:<br></br>
1. Experience working in a higher education institution.<br></br>
2. Bilingual in English and Spanish <br></br>
3. Master’s degree.</p>

          <button onClick={handleReadMoreClick} className="button-305">Job Description</button>
        </div>
        <div>
          <img
            className="phonesee"
            src="https://logowik.com/content/uploads/images/amazon6707.jpg"
            height="580px"
            width="580px"
            alt=""
          />
        </div>
      </div>
      <div className="aboutpage2" id="target-section">
        <div>
          <div className='aboutthisjob'>
        <h3 className="fadeInUp5">About this job<br></br><br></br>We are looking for a Credit Manager to oversee our company’s lending process, from evaluating clients’ creditworthiness to approving or rejecting loan requests.

Credit Manager responsibilities include creating credit scoring models, setting loan terms and determining interest rates. To be successful in this role, you should have a degree in Accounting or Finance along with experience processing loan applications. Previous banking experience is a plus.

Ultimately, you will help us minimize bad debts and increase revenues from loans.<br></br><br></br>
Outline the main responsibilities of the position. Make sure your list of responsibilities is detailed but concise. Also emphasize the duties that may be unique to your organization. For example, if you are hiring for an “Event Management” role, and the position requires social media expertise to promote events, include this detail to ensure candidates understand the requirements and can determine if they’re qualified.<br></br><br></br>

Describe the day-to-day activities of the position. This will help candidates understand the work environment and the activities they will be involved in on a daily basis. This level of detail will help the candidate decide if the role and company are right for them, and will help you attract the best candidates for your position.

Specify how the position fits into the organization. Indicate the title of the manager the person will report to and how they will function within your organization, to help candidates see the bigger picture and understand how the role impacts the business.</h3>
        </div>
        <br></br>
          <div>
          <Link to='/applynow'><button class="button-306" role="button">Apply Now</button></Link>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Applied;