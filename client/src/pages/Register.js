import React from 'react'
import { useState, useEffect } from 'react';
import { Logo,FormRow  } from '../components';
import Wrapper from '../assets/wrappers/RegisterPage';

const initialState = {
    name: '',
    password: '',
    email: '',
    isMember: true
}

const Register = () => {

    const [val, setVal] = useState(initialState);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event)
    }

    const handleChange = (event) => {
        console.log(event.target);
    }
    return (
        <Wrapper className='full-page' onSubmit={handleSubmit}>
            <form className='form'>
                <Logo />
                <h3>Login</h3>
                {/* name input  */}
                <FormRow
                    type="text"
                    name="name"
                    val={val.name}
                    handleChange={handleChange}>
                </FormRow>
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
                    type="submit" className='btn btn-block'>Login</button>
            </form>
        </Wrapper>
    )
}

export default Register