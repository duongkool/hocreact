import { useState } from 'react';
import './login.scss'
import { useNavigate } from 'react-router-dom';
import { postLogin } from '../../Services/apisServices'
import { toast } from 'react-toastify';

const Login = (props) => {
    const navigate = useNavigate()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const handleLogin = async () => {
        // validate
        const isValidEmail = validateEmail(email);
        if (!isValidEmail) {
            toast.error('invalid email')
            return;
        }
        if (!password) {
            toast.error('invalid password')
            return;
        }
        // submit apis
        let data = await postLogin(email, password)
        if (data && data.EC === 0) {
            toast.success(data.EM);
            navigate('/')
        }
        if (data && data.EC !== 0) {
            toast.error(data.EM)
        }



    }
    return (
        <div className="login-container">
            <div className='header'>
                <span>Don't have an account yet?</span>
                <button
                    onClick={() => { navigate('/Register') }}
                    className='btn-signup'>Sign up</button>
                <span className='need-hepls'>Need helps?</span>
            </div>
            <div className='title col-4 mx-auto'>
                <h2>Typeform</h2>
            </div>
            <div className='welcome col-4 mx-auto'>
                <span>Hello, who’s this?</span>
            </div>
            <div className='content-form col-4 mx-auto'>
                <div className='form-group'>
                    <label>Email</label>
                    <input
                        type={"email"}
                        className='form-control'
                        placeholder='bruce@wayne.com'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div className='form-group'>
                    <label>Password </label>
                    <input
                        type={"password"}
                        className='form-control'
                        placeholder='At least 8 characters'
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}

                    />
                </div>

                <span className='Forgot-password'>Forgot password?</span>
                <div>
                    <button className='btn-login'
                        onClick={() => handleLogin()}
                    >Login in to Typeform
                    </button>
                </div>
                <div className='go-home'>
                    <span
                        onClick={() => { navigate('/') }}
                    >&gt;&gt; Go to homepage</span>
                </div>
            </div>

        </div>

    )
}
export default Login;