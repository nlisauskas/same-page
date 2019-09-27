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
            <h2>Contractor Financials / Taxes View</h2>
              <p>Shows a contractor's finances (cash flow, profit by job, profit by type of job, etc. to give them actionable insights into their business.)</p>
              <p>Charts showing all types of finances related to contractor's jobs.</p>
              <p>Expense Management / Invoicing / Tax Section</p>
            </div>
        )
    }
}
export default FinancialsContainer;
