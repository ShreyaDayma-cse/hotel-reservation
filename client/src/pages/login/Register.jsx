import "./login.css"
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () =>{
    const navigate = useNavigate()
    const [credentials, setCredentials] = useState({
        username: undefined,
        email: undefined,
        password: undefined,
    })
    const  handleChange = async (e) =>{
        let target = e.target
        setCredentials({
            ...credentials,
            [target.name]: target.value
        })
        console.log(credentials);
    }
    async function saveUser(e){
        e.preventDefault();
        try{
            await axios.post("https://backend-hotel-book.herokuapp.com/api/auth/register", credentials);
            navigate("/login")
           
        }catch(err){
            console.log(err);
        }
    }
    return <div className="login">
        <div className="lContainer">
            <h1 color="#0071c2" className="header">Registration</h1>
            <input type="text" placeholder="Username" id="username" onChange={handleChange} className="lInput" name="username"/><br />            
            <input type="email" placeholder="Email" id="email"  onChange={handleChange} className="lInput" name="email" /><br />
            <input type="password" placeholder="Password" id="password"  onChange={handleChange} className="lInput" name="password"/><br />
            <button  onClick={saveUser} className="lButton">Register</button>
            <h4><a href="/login">Already a User? Login</a></h4>
        </div>
    </div>
}

export default Register