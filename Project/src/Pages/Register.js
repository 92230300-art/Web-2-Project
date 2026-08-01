import '../Styles/Register.css';
import { Link } from 'react-router-dom';
import RegisterP from '../Img/Register.png';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Register() {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(password !== confirmPassword){
            alert("Passwords do not match");
            return;
        }

        try {

            const response = await axios.post(
                "http://localhost:5000/register",
                {
                    username,
                    email,
                    password
                }
            );
            navigate('/')
            alert(response.data.message);

        } catch(error) {
            console.log(error);
            alert("Register failed");
        }
    };


    return (
        <main 
        className="register" 
        style={{ backgroundImage: `url(${RegisterP})`, backgroundSize: 'cover' }}>

            <div className="register-container">

                <form className="register-form" onSubmit={handleSubmit}>

                    <h2>Create Account</h2>

                    <input 
                        type="text" 
                        placeholder="Full Name"
                        value={username}
                        onChange={(e)=>setUsername(e.target.value)}
                        required
                    />

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

                    <input 
                        type="password" 
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e)=>setConfirmPassword(e.target.value)}
                        required
                    />

                    <button type="submit">
                        Register
                    </button>

                    <p>
                        Already have an account? 
                        <Link to="/login"> Login</Link>
                    </p>

                </form>

            </div>

        </main>
    );
}

export default Register;