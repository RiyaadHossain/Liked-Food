import React from 'react';
import './Summary.css'

const Summary = ({like}) => {
    return (
        <div className='summary'>
            <div className='border'><h2>You Liked</h2></div>
            <div className="summary-body"><p className='lead'><strong>Like:</strong> { like.length}</p></div>
        </div>
    );
};

export default Summary;