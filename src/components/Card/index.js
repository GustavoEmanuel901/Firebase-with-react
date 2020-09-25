import React from 'react';
import './styles.css'

function Card({name}) {
  return (
    <div className="card">
        <div className="card-content">

        </div>

        <div className="card-footer">
            <span>{name}</span>
        </div>
    </div>
  );
}

export default Card;