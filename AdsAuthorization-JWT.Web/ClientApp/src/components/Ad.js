import React from 'react';

const Ad = ({ ad: { name, datePosted, description, id, phoneNumber }, canDelete, onDeleteClick }) => {
    return (
        <div className="jumbotron">
            <h5>Listed by {name}</h5>
            <h5>Listed on {datePosted}</h5>
            <h5>Phone Number: {phoneNumber}</h5>
            <h3>Details:</h3>
            <p>{description}</p>
            {canDelete && <button className="btn btn-danger" onClick={onDeleteClick}>Delete</button>}
        </div>
    )
}
export default Ad;