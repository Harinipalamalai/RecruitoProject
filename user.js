import React from 'react'
import './user.css';
import './Admin';
import {Link} from 'react-router-dom';
function User() {
  return (
    <div className="start">
      <div className="blur"></div>
        <div>
<h1 className="abhi"><img src="https://cdn-icons-png.flaticon.com/512/9631/9631083.png"className='bellws'></img>RECRUITO</h1>
  
     </div>
      <div class="wrapper">
     <div class="link_wrapper">
           <Link to="/Admin"> <a className="starting"href="">Admin</a></Link>
    <br></br><br></br>
    </div>
    <div class="link_wrapper">
           <Link to="/Home"> <a className="starting"href="">User</a></Link>
   
    </div>
   
    
</div>
    </div>
  )
}

export default User