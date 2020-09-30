import * as firebase from 'firebase/app'
import 'firebase/firestore'

const createPercentage = fund => {
    return {
        ...fund,
        percentage: (fund.currentValue) * 100 / fund.requiredValue
    }
}

const addFund = fund => {
    const db = firebase.firestore()
    return db.collection('funds').add(createPercentage(fund))
}

const updateFund = (id, fund )=> {
    const db = firebase.firestore()
    return db.collection('funds').doc(id).set(createPercentage(fund))
}

const deleteFund = id => {
    const db = firebase.firestore()
    return db.collection('funds').doc(id).delete()
}

const listFunds = async () => {
    const db = firebase.firestore()
    const response = await db.collection('funds').get()
    return response.docs.map((item) => {
        return {
            id: item.id,
            ...item.data()
        }
    })
}

export default {
    addFund,
    updateFund,
    deleteFund,
    listFunds
}