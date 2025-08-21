import React from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

const Triple = ({ openOrder, selectedGoods, addOrder, goods }) => {
    return (
        <div>
            <Header openOrder={openOrder} selectedGoods={selectedGoods} />
            <Main addOrder={addOrder} goods={goods} selectedGoods={selectedGoods} />
            <Footer />
        </div>
    )
}

export default Triple
