import React, {useState} from "react";
import "./login.css";


    

    const [ user, setUser] = useState({
        email:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
const Login = () =>{
    return(
        <div className="login"><h1>Login</h1>
         {console.log(user)}
    <input type="text" value={user.email} onChange={handleChange}  placeholder="Enter your Email"></input>
    <input type="password" value={user.password} onChange={handleChange} placeholder="Enter your Password"></input>
        <div className="button">Login</div>

        <div>or</div>
        <div className="button">Register</div>
        </div>
    )
}
export default Login;