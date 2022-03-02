import React from 'react'

const FormRow = ({name , type , handleChange , labelText , val}) => {
    return (
        <div className='form-row'>
                    <label
                        htmlFor={name} className='form-label'>
                        {labelText || name}
                    </label>
                    <input
                        type={type} name={name} className='form-input'
                        value={val} onChange={handleChange} >
                    </input>
                </div>
    )
}

export default FormRow