import React from 'react';

import { FaPlus } from 'react-icons/fa'

import './styles.css';

export default function Empty({ onClick }) {
  return (
    <div className='card'>
        <div className="card-content">
            <div style={{
                margin: 'auto',
                marginTop: '5px',
                marginBottom: '20px',
                width: '150px',
                height: '150px',
                border: '2px dashed #ccc',
                borderRadius: '50%',
                cursor: 'pointer'
            }}
            onClick={onClick}>
                <FaPlus size={50} color='#ccc'/>
            </div>
        </div>

        <div className="card-footer">
            <span>Novo Fundo</span>
        </div>
    </div>
  )
}

