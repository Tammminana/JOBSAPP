import React from 'react'
import { useState, useEffect } from 'react';
import { Logo, FormRow, Alert } from '../components';
import Wrapper from '../assets/wrappers/RegisterPage';
import { useAppContext } from '../context/appContext';

const initialState = {
    name: '',
    password: '',
    email: '',
    isMember: true,
}


const Register = () => {

    const [val, setVal] = useState(initialState);

    const {isLoading , showAlert} = useAppContext();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event)
    }

    const handleChange = (event) => {
        console.log(event.target);
    }

    const toggleMember = () => {
        setVal({ ...val, isMember: !val.isMember });
    }

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
                    type="submit" className='btn btn-block'>
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