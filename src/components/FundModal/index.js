import React, { useState, useEffect } from 'react';

import { Modal, Button, Form, Input, InputNumber, DatePicker } from 'antd'
import moment from 'moment'

import './styles.css'

function FundModal({ visible, onClose, fund }) {

  const [ name, setName] = useState('')
  const [ currentValue, setCurrentValue ] = useState(0)
  const [ requiredValue, setRequiredValue ] = useState(0)
  const [ rescueDate, setRescueDate] = useState(null)

  useEffect(() => {
    setName(fund.name)
    setCurrentValue(fund.currentValue)
    setRequiredValue(fund.requiredValue)
    setRescueDate(fund.rescueDate)

    if(fund.rescueDate) {
      setRescueDate(moment(fund.rescueDate))
    }
  }, [fund])

  function handleCancel(){
    onClose()
  }

  function handleOk(){
    onClose()
  }

  return (
    <>
      <Modal
        title='Criar fundo de Capital'
        visible={visible}
        onCancel={handleCancel}
        footer={
          [
            <Button
              key='cancel'
              onClick={handleCancel}
              type='link'
            >
              Cancelar
            </Button>,

            <Button
              key='submit'
              onClick={handleOk}
              type='link'
            >
              Salvar
            </Button>
          ]
        }
      >
        <Form layout='vertical'>
        <Form.Item label='Name'>
          <Input 
            value={name} 
            onChange={e => setName(e.target.value)}
          />
        </Form.Item>

        <Form.Item label='Valor Atual'>
          <InputNumber
            defaultValue={0}
            formatter={value => `R$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
            parser={value => value.replace(/R\$s?|(\.*)/g,  '')}
            value={currentValue}
            onChange={value => setCurrentValue(value)}
          />
        </Form.Item>

        <Form.Item label='Valor Necessário'>
          <InputNumber
            defaultValue={0}
            formatter={value => `R$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
            parser={value => value.replace(/R\$s?|(\.*)/g, '')}
            value={requiredValue}
            onChange={value => setRequiredValue(value)}
          />
        </Form.Item>

        <Form.Item label='Data de Resgate'>
          <DatePicker
            format='DD-MM-YYYY'
            placeholder='Selecione uma data'
            value={rescueDate}
            onChange={value => setRescueDate(value)}
          />
        </Form.Item>
      </Form>

      </Modal>

      
  </>
  );
}

export default FundModal;