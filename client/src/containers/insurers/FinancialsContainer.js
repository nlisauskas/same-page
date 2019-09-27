import React, { Component } from 'react';
import axios from 'axios';

class FinancialsContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            financials: []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:3001/api/v1/financials.json')
        .then(response => {
            console.log(response)
            this.setState({
                financials: response.data
            })
        })
        .catch(error => console.log(error))
    }
    render() {
        return (
            <div className="financials-container">
            <h2>Insurer Financials / Taxes View</h2>
              <p>Iterate through claims and display cash flow to date, projected monthly cash flow, other related financials, etc.</p>
              <p>Charts showing all types of finances related to insurer's claim management.</p>
              <p>Expense Management Section</p>
            </div>
        )
    }
}
export default FinancialsContainer;
