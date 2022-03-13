import React, { useState, useReducer, useContext, Children } from "react";
import reducer from "./reducer";
import {
    DISPLAY_ALERT,
    CLEAR_ALERT,
    REGISTER_USER_BEGIN,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_ERROR
}
    from "./actions";
import axios from 'axios';

const initialState = {
    isLoading: false,
    showAlert: true,
    alertText: '',
    alertType: '',
    user: null,
    token: null,
    userLocation: '',
    jobLocation: '',
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

    const registerUser = async (currentUser) => {
        // console.log(currentUser)
        dispatch({ type: REGISTER_USER_BEGIN })
        try {
            const response = await axios.post('/api/v1/auth/register', currentUser);
            console.log(response);
            const { user, token , location} = response.data;
            dispatch({
                type: REGISTER_USER_SUCCESS,
                payload: {
                    user,
                    token,
                    location,
                }
            })

        } catch (error) {
            dispatch({
                type: REGISTER_USER_ERROR,
                payload: {
                    msg: error.response.data.msg
                }
            });
        }
        clearAlert();
    }

    return <AppContext.Provider value={{ ...state, displayAlert, registerUser }}>
        {children}
    </AppContext.Provider>
}

const useAppContext = () => {
    return useContext(AppContext);
}



export { AppProvider, initialState, useAppContext }