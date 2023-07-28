import React,{useState} from 'react'
import './Adminlogin.css';
import identify from"./identify.png";
import './Createac';
import './Admindashboard';
import './Home';
import axios from 'axios';
import {Link,useNavigate} from 'react-router-dom';
function Login() {
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const navigate=useNavigate();
    const handleSubmit= async(e)=>{
        e.preventDefault();



        const data={
            email:email,
            password:password,
        };
        try{
            const response =await axios.post('http://127.0.0.1:8080/api/v1/auth/authenticate',data)
            .then((response)=>{
                console.log(response.data);
                localStorage.setItem('token',response.data.token);
                console.log(localStorage.getItem('token'));
            })
            alert("Login successful");
            navigate("/Admindashboard");
        }
        catch(error){
            alert("Invalid email and password");
        }
    }

  return (
    <body>
   <header class="header">
   <Link to="/"><img src="https://cdn-icons-png.flaticon.com/128/93/93634.png"className='bellwoi'></img></Link>
   </header>
    <div class="background"></div>
    <div class="container">
        <div class="item">
            <img className="solorr" src={identify}/>
            <div class="text-item">
                <h1 className='heading'>Recruito<br/><span>
                    
                </span></h1>
                <p>"Unlock Your Potential: Join Our Winning Team!"</p>
            </div>
        </div>
        <div class="login-section">
            <div class="form-box login">
                <form onSubmit={handleSubmit}>
                    <h2>Log In</h2>
                    <div class="input-box">
                        <span class="icon"><i class='bx bxs-envelope'></i></span>
                        <input type="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                    </div>
                    <div class="input-box">
                        <span class="icon"><i class='bx bxs-lock-alt' ></i></span>
                        <input type="password" placeholder='Password'value={password} onChange={(e)=>setPassword(e.target.value)}required/>
                    </div>
                    <div class="remember-password">
                        <label for=""><input type="checkbox"/>Remember Me</label>
                        <a href="#">Forget Password</a>
                    </div>
                    <button class="btn">Log In</button>
                    <button class="google"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNBFaWfLGLcxy9wQ3jFfKa87DLrQ_rv7v2UQ&usqp=CAU" class='googleimg'></img>Sign In with Google</button>
                    <div class="create-account">
                        <p>Don't have an Account?<Link to="/createac"><a class="register-link">Sign Up</a></Link></p>
                    </div>
                </form>
            </div>
            
                   
               
            </div>
        </div>
    
</body>
    
  )
}

export default Login