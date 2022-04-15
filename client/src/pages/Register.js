import React from 'react'
import { useState, useEffect } from 'react';
import { Logo, FormRow, Alert } from '../components';
import Wrapper from '../assets/wrappers/RegisterPage';
import { useAppContext } from '../context/appContext';
import { useNavigate } from 'react-router-dom';

const initialState = {
    name: '',
    password: '',
    email: '',
    isMember: false,
}


const Register = () => {

    const [val, setVal] = useState(initialState);

    const { user, isLoading, showAlert, displayAlert, registerUser,loginUser,setupUser } = useAppContext();
    const { name, email, password, isMember } = val;

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(event)
        if (!email || !password || (!isMember && !name)) {
            displayAlert();
            return;
        }

        const currentUser = { name, email, password }
        if (isMember) {
            // console.log("Already a Member");
            setupUser({
                currentUser,
                endPoint : 'login',
                alertText : 'Login Successful! Redirecting...'
            });
        } else {
            setupUser({
                currentUser,
                endPoint : 'register',
                alertText : 'Registered Successfully! Redirecting'
            });
        }
    }

    const handleChange = (event) => {
        // console.log(event.target);
        setVal({ ...val, [event.target.name]: event.target.value })
    }

    const toggleMember = () => {
        setVal({ ...val, isMember: !val.isMember });
    }

    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            setTimeout(() => {
                navigate("/");
            }, 3000)
        }
    }, [user, navigate])




    return (
        <Wrapper className='full-page' onSubmit={handleSubmit}>
            <form className='form'>
                <Logo />
                <h3>{val.isMember ? 'Login' : 'Register'}</h3>
                {showAlert && <Alert />}
                {/* name input  */}
                {!val.isMember && <FormRow
                    type="text"
                    name="name"
                    val={val.name}
                    handleChange={handleChange}>
                </FormRow>}

                {/* email input  */}
                <FormRow
                    type="email"
                    name="email"
                    val={val.email}
                    handleChange={handleChange}>
                </FormRow>
                {/* password input  */}
                <FormRow
                    type="password"
                    name="password"
                    val={val.password}
                    handleChange={handleChange}>
                </FormRow>
                <button
                    type="submit" className='btn btn-block' disabled={isLoading}>
                    {val.isMember ? 'Login' : 'Register'}
                </button>
                <p>
                    {val.isMember ? 'Not a Member Yet?' : 'Already a member?'}
                    <button
                        type="button"
                        className='member-btn'
                        onClick={toggleMember}>
                        {!val.isMember ? 'Login' : 'Register'}
                    </button>
                </p>
            </form>
        </Wrapper>
    )
}

export default Register