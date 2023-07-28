import React from 'react'
import './Admindashboard.css';
import './Admin';
import {Link} from 'react-router-dom';
function Dashboard() {
  return (
    <div>
        <header>
            <div class="logosec">
                <Link to="/login"><img src="https://cdn-icons-png.flaticon.com/128/93/93634.png"className='bellw'></img></Link>
                <div class="logo"><img src="https://cdn-icons-png.flaticon.com/512/9631/9631083.png"className='bellws'></img>Recurito</div>
            </div>
        </header>
        <div class="main-container">
            <div class="navcontainer">
                <nav class="nav">
                    <div class="nav-upper-options">
                        <div class="nav-option option1">
                            <img src=
    "https://media.geeksforgeeks.org/wp-content/uploads/20221210182148/Untitled-design-(29).png"
                                class="nav-img"
                                alt="dashboard"></img>
                            <h3> Dashboard</h3>
                        </div>
                        <div class="option2 nav-option">
                            <img src=
    "https://cdn-icons-png.flaticon.com/128/942/942799.png"
                                class="nav-img"
                                alt="articles"></img>
                           <Link to="/viewapp">  <h3 className='finds'>View Application</h3></Link>
                        </div>
                        <div class="option2 nav-option">
                            <img src=
    "https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                                class="nav-img"
                                alt="articles"></img>
                           <Link to="/removeapp">  <h3 className='finds'>Remove Application</h3></Link>
                        </div>
                        <div class="nav-option logout">
                            <img src=
    "https://media.geeksforgeeks.org/wp-content/uploads/20221210183321/7.png"
                                class="nav-img"
                                alt="logout"></img>
                            <Link to="/Admin"><h3>Logout</h3></Link>
                        </div>
    
                    </div>
                </nav>
            </div>
            <div class="mainty">
    <img src=
    "https://cdn-icons-png.flaticon.com/512/9631/9631083.png"
                                class="imgkjhgf"
                               ></img>
      
        </div>
        </div></div>
        
)
}

export default Dashboard