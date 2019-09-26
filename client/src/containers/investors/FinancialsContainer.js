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
              <p>Iterate through properties and show zestimate, cash flow to date, projected monthly cash flow, remaining months on mortgage, ROI if sold today, etc.</p>
              <p>Total assets, total liabilities, net worth in real estate investments.</p>
              <p>Charts showing all types of finances related to investor's properties.</p>
              <p>Expense Management Section</p>
            </div>
        )
    }
}
export default FinancialsContainer;
