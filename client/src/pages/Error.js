import React from 'react'
import { Link } from 'react-router-dom';
import img from '../assets/images/not-found.svg';
import Wrapper from '../assets/wrappers/ErrorPage';

const Error = () => {
    return (
        <Wrapper className='full-page'>
        <div>
        <img src={img} alt='NOT FOUND'></img>
        <h3>ERROR</h3>
        <p>You have entered something wrong</p>
        <Link to="/">Back Home</Link>
        </div>
        </Wrapper>
    )
}

export default Error