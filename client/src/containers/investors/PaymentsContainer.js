import React, { Component } from 'react';
import axios from 'axios';
import Payment from '../../components/investors/Payment'

class PaymentsContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            payments: []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:3001/api/v1/payments.json')
        .then(response => {
            console.log(response)
            this.setState({
                payments: response.data
            })
        })
        .catch(error => console.log(error))
    }
    render() {
        return (
            <div className="payments-container">
            {this.state.payments.map( payment => {
         return (<Payment payment={payment} key={payment.id} />)
     })}
            </div>
        )
    }
}
export default PaymentsContainer;
