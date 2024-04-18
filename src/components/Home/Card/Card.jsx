import React from 'react'
import "./Card.css"

const Card = (props) => {
    return (
        <>
            <div className="card m-3" style={{ width: '18rem' }}>
                <img src={props.img} className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title"><span>{props.name}</span></h5>
                    <hr className='mt-0' />
                    <p className="card-text">Age: <span>{props.age}</span></p>
                    <p className="card-text">Sport: <span>{props.sport}</span></p>
                    <p className="card-text">Country: <span>{props.country}</span></p>
                    <p className="card-text">Status: <span>{props.status}</span></p>
                    <a href="https://www.google.com/" target="_blank" rel="noreferrer" className="btn btn-warning">Google him</a>
                </div>
            </div>
        </>
    )
}

export default Card