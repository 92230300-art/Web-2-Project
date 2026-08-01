import '../Styles/Login.css';
import LoginP from '../Img/Login.jpeg';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {

            const response = await axios.post(
                "http://localhost:5000/login",
                {
                    email,
                    password
                },
                navigate('/')
                
            );
if(response.data.user){

    localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
    );

}
            alert(response.data.message);
            

        } catch(error) {

            console.log(error);
            alert("Login failed");

        }
    };


    return (
        <div style={{ backgroundImage: `url(${LoginP})`, backgroundSize: 'cover' }}>

            <main className='Login' style={{ backgroundImage: `url(${LoginP})`, backgroundSize: 'cover' }}>

                <div className="container">

                    <form 
                    className="login-form"
                    onSubmit={handleSubmit}
                    >

                        <h2>Welcome Back</h2>

                        <input 
                            type="email" 
                            placeholder="Email"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            required 
                        />

                        <input 
                            type="password" 
                            placeholder="Password"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            required 
                        />

                        <button type="submit">
                            Login
                        </button>

                        <p>
                            Don't have an account?
                            <Link to="/register"> Register</Link>
                        </p>

                    </form>

                </div>

            </main>

        </div>
    );
}

export default Login;