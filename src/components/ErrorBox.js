import React from 'react'

export const ErrorBox = () => {
  return (
    <div className='detail-field error'>
        <div className='detail-field__container'>
            <h2 className='detail-field__error'>
                You have not entered a valid pokemon name yet! What are you waiting for???
            </h2>
        </div>
    </div>
  )
}
