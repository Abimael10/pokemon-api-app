import React from 'react'

const DetailsField = (props) => {
  return (
    <div className='detail-field'>
        <div className='detail-field__container'>
            <div className='detail-field__image'>
                <img src={props.image} alt={props.name} />
            </div>
            <div className='detail-field__info'>
                <div className='detail-field__info__name'>
                    {/*
                    @Juan Santos
                    Pokemon name 
                    */}
                    <h1>
                        <span className='detail-field__info__name__value'>
                            {props.name}
                        </span>
                    </h1>

                    {/*
                      * @Juan Santos
                      * Pokemon type 
                      */}
                    <div className='detail-field__info__name__type'>
                        <h2>
                            <span className='detail-field__info__name__type__value'>
                                <span className='label'>Type:</span> {props.type}
                            </span>
                        </h2>
                    </div>

                    <div className='detail-field__info__name__type'>
                        <h2>
                            <span className='detail-field__info__name__type__value'>
                                <span className='label'>Species:</span> {props.species}
                            </span>
                        </h2>
                    </div>

                    <div className='detail-field__info__name__type'>
                        <h2>
                            <span className='detail-field__info__name__type__value'>
                                <span className='label'>Height:</span> {props.height}
                            </span>
                        </h2>
                    </div>

                    <div className='detail-field__info__name__type'>
                        <h2>
                            <span className='detail-field__info__name__type__value'>
                                <span className='label'>Weight:</span> {props.weight}
                            </span>
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DetailsField;