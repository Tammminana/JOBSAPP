import React from 'react'
import Wrapper from '../assets/wrappers/Navbar'
import { FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa';
import Logo from './Logo'
import {useAppContext} from '../context/appContext';

const Navbar = () => {
    return (
        <Wrapper>
        <div className='nav-center'>
        <button
        type = 'button'
        className='toggle-btn'
        onClick={()=>{console.log("toggle the sidebar")}}
        >
            <FaAlignLeft/>
        </button>
        <div>
            <Logo/>
            <h3 className='logo-text'>dashboard</h3>
        </div>
        <div className='btn-container'>
            <button
            type='button'
            className='btn'
            onClick={()=>{console.log("show/hide dropdown")}}
            >
                <FaUserCircle/>
                User 
                <FaCaretDown/>
            </button>
            <div className='dropdown show-dropdown'>
                <button
                type='button'
                className='dropdown-btn'
                onClick={()=>{console.log("drop/hide logout")}}>
                    logout
                </button>
            </div>
        </div>
        </div>
        </Wrapper>
    )
}

export default Navbar