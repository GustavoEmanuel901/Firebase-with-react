import React, { useState } from 'react'

import Card from '../../components/Card'
import Empty from '../../components/Empty'
import FundModal from '../../components/FundModal'

import './styles.css'

const Home = () => {
    const [ visible, setVisible ] = useState(false)
    const [ select, setSelect ] = useState({})

    function onClose(){
        setVisible(false)
    }

    const funds = [
        {
           id: 1,
           name: 'Fundo Teste',
           currentValue: 1000,
           requiredValue: 2500,
           percentage: 10,
           rescueDate: new Date().toISOString()
        },
        {
            id: 2,
            name: 'Novo Fundo',
            currentValue: 250,
            requiredValue: 2500,
            percentage: 10,
            rescueDate: new Date().toISOString()
         },
         {
            id: 3,
            name: 'Fundo 3',
            currentValue: 250,
            requiredValue: 2500,
            percentage: 10,
            rescueDate: new Date().toISOString()
         }
    ]
    
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