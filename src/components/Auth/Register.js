import logo from './product-sample.webp'
import './register.scss'
import { useNavigate } from 'react-router-dom';
import { FiEye } from "react-icons/fi";
import { MdCopyright } from "react-icons/md";
import { useState } from 'react';
import { toast } from 'react-toastify';
import { postRegister } from '../../Services/apisServices'


const Register = (props) => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassWord] = useState("");
    const [username, setUserName] = useState("");
    const [isShowPassword, setIsShowPassword] = useState(false);

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const handleRegister = async () => {
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
        let data = await postRegister(email, password, username)
        if (data && data.EC === 0) {
            toast.success(data.EM);
            navigate('/')
        }
        if (data && data.EC !== 0) {
            toast.error(data.EM)
        }



    }

    return (
        <div className="register-container">
            <div className="left-main">
                <h1 className='title-main'>Sign up <br />
                    and come on in</h1>
                <img src={logo} />
                <span><MdCopyright />Typeform</span>
            </div>
            <div className="right-main">
                <div className="login-container">
                    <div className='header'>
                        <span>Already have an account</span>
                        <button
                            className='btn-signup'
                            onClick={() => { navigate('/Login') }}
                        >Login</button>
                    </div>
                    <div className='title col-4 mx-auto'>
                        <h2>Typeform</h2>
                    </div>
                    <div className='welcome col-4 mx-auto'>
                        <span>Start your journey?</span>
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
                        <div className='form-group form-password'>
                            <label>Password </label>
                            <input
                                type={isShowPassword ? "text" : "password"}
                                className='form-control'
                                value={password}
                                onChange={(event) => setPassWord(event.target.value)}

                            />
                            {isShowPassword ?
                                <span
                                    onClick={() => setIsShowPassword(false)}
                                    className='showhide-password'><FiEye />
                                </span>
                                :
                                <span
                                    onClick={() => setIsShowPassword(true)}
                                    className='showhide-password'><FiEye />
                                </span>


                            }
                        </div>
                        <div className='form-group'>
                            <label>User name </label>
                            <input className='form-control' />
                        </div>
                        <div className='form-group btn-create-account'>
                            <button className='btn-login'
                                onClick={() => handleRegister()}
                            >Create my free account
                            </button>
                        </div>
                        <div className='go-home'>
                            <span
                                onClick={() => { navigate('/') }}
                            >&gt;&gt; Go to homepage</span>
                        </div>
                    </div>

                </div>

            </div>

        </div>

    )
}
export default Register;