import React, { useState, useEffect } from 'react'

import Card from '../../components/Card'
import Empty from '../../components/Empty'
import FundModal from '../../components/FundModal'

import database from '../../services/database'

import './styles.css'

const Home = () => {
    const [ visible, setVisible ] = useState(false)
    const [ select, setSelect ] = useState({})
    const [ funds, setFunds ] = useState([])

    useEffect(() => {
        database.listFunds().then(res => {
            setFunds(res)
        })
    }, [funds])

    function onClose(){
        setVisible(false)
    }
    
    const updateFund = fund => {
        setSelect(fund)
        setVisible(true)
    }

    const deleteFund = async fund => {
        console.log('deletando o fundo ' + fund.id)
    }

    return (
        <div className="row">
            {funds.map(fund => (
                <Card
                    key={fund.id}
                    name={fund.name}
                    percentage={fund.percentage}
                    currentValue={fund.currentValue}
                    updateFundHandle={() => updateFund(fund)}
                    deleteFundHandle={() => deleteFund(fund)}
                />
            ))}
            <Empty
                onClick={() => updateFund({
                    rescueDate: undefined,
                    currentValue: 0,
                    requiredValue: 0
                })}
            />

            <FundModal
                visible={visible}
                onClose={onClose}
                fund={select}
            />
        </div>
    );
}
 
export default Home;