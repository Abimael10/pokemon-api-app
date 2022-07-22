import React from 'react'

const InputField = (props) => {

  return (
    <div className="content">
        <div className="container">
            <div className="search-bar">
                <div className="search-bar__container">
                    <div className="input">
                        <input value={props.input} onChange={props.handleInputChange} className="input__value" type="text" placeholder="Search pokemon by name..." />
                    </div>
                    <div className="search-btn">
                        <button className="btn" onClick={props.handleClick}>Search</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InputField;