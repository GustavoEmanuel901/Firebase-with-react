import React from 'react';

import { FaPen, FaTimes } from 'react-icons/fa'
import { Progress } from 'antd'
import accounting from 'accounting'

import './styles.css'

function Card({ name, percentage, currentValue, updateFundHandle, deleteFundHandle }) {
  return (
    <div className="card">
        <div className="card-icon">
          <FaPen color='#001AA0' onClick={updateFundHandle}/>
          <FaTimes color='#001AA0' onClick={deleteFundHandle}/>
        </div>

        <div className="card-content">
          <Progress
            type='dashboard'
            width={175}
            percent={percentage}
            strokeWidth={9}
            strokeColor='#001AA0'
            format={() => accounting.formatMoney(currentValue, 'R$ ', 2, '.', ',')}
          >

          </Progress>
        </div>

        <div className="card-footer">
            <span>{name}</span>
        </div>
    </div>
  );
}

export default Card;