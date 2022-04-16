import React, { useState, useReducer, useContext, Children } from "react";
import reducer from "./reducer";
import {
    DISPLAY_ALERT,
    CLEAR_ALERT,
    SETUP_USER_BEGIN,
    SETUP_USER_SUCCESS,
    SETUP_USER_ERROR,
    TOGGLE_SIDEBAR,
    LOGOUT_USER,
}
    from "./actions";
import axios from 'axios';

const token = localStorage.getItem('token');
const user = localStorage.getItem('user');
const userLocation = localStorage.getItem('location')

const initialState = {
    isLoading: false,
    showAlert: true,
    alertText: '',
    alertType: '',
    user: user ? JSON.parse(user) : null,
    token: token,
    userLocation: userLocation || '',
    jobLocation: userLocation || '',
    showSidebar: false,
}

const AppContext = React.createContext();

const AppProvider = ({ children }) => {


    const [state, dispatch] = useReducer(reducer, initialState);
    const clearAlert = () => {
        setTimeout(() => {
            dispatch({ type: CLEAR_ALERT });
        }, 1800);
    }

    const displayAlert = () => {
        dispatch({ type: DISPLAY_ALERT });
        clearAlert();
    }

    const addUserToLocalStorage = ({ user, location, token }) => {
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('token', token);
        localStorage.setItem('location', location);
    }

    const removeUserFromLocalStorage = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('token ');
        localStorage.removeItem('location');
    }

    const setupUser = async ({ currentUser, endPoint, alertText }) => {
        // console.log(currentUser)
        dispatch({ type: SETUP_USER_BEGIN })
        try {
            const { data } = await axios.post(`/api/v1/auth/${endPoint}`, currentUser);
            // console.log(response);
            const { user, token, location } = data;
            dispatch({
                type: SETUP_USER_SUCCESS,
                payload: {
                    user,
                    token,
                    location,
                    alertText
                }
            })
            addUserToLocalStorage({ user, location, token })
        } catch (error) {
            dispatch({
                type: SETUP_USER_ERROR,
                payload: {
                    msg: error.response.data.msg
                }
            });
        }
        clearAlert();
    }

    const toggleSidebar = () => {
        dispatch({ type: TOGGLE_SIDEBAR });
    }

    const logoutUser = () => {
        dispatch({ type: LOGOUT_USER });
        removeUserFromLocalStorage();
    }

    return <AppContext.Provider
        value={{ ...state, displayAlert, setupUser, toggleSidebar, logoutUser }}>
        {children}
    </AppContext.Provider>
}

const useAppContext = () => {
    return useContext(AppContext);
}



export { AppProvider, initialState, useAppContext }