import React from 'react'
import './Admin.css';
import './Adminlogin';
import {Link} from 'react-router-dom';
function Home() {
  return (
    <div>
      <header class="headersd">
        <a href="#" class="logo">Recruito</a>
        <nav class="nav-item">
        <Link to="/Adminlogin"><a>LOGIN</a></Link>
        </nav>
      </header>
      <main>
        <div class="intro">
          <h1>Latest Job Opportunity</h1>
          <p>Find the right job work without boders</p>
        </div>
      </main>
      <footer class="footer">
        <div class="copy">&copy; 2022 Employees</div>
        
    </footer>
      </div>
  )
}

export default Home