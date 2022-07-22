import React from 'react'

export const ErrorBox = () => {
  return (
    <div className='detail-field error'>
        <div className='detail-field__container'>
            <h2 className='detail-field__error'>
                Unable to find the pokemon. Please try again.
            </h2>
        </div>
    </div>
  )
}
