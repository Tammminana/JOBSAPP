import React from 'react';
import { DISPLAY_ALERT } from './actions';

const reducer = (state, action) => {
    if(action.type == DISPLAY_ALERT){
        return {
            ...state,
            showAlert : true,
            alertType : 'danger',
            alertText : 'Entered no value',
        }
    }
    throw new Error(`No such ${action.type}`)
}

export default reducer