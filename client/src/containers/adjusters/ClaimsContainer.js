import React, { Component } from 'react';
import axios from 'axios';
import Claim from '../../components/adjusters/Claim'

class ClaimsContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            claims: []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:3001/api/v1/claims.json')
        .then(response => {
            console.log(response)
            this.setState({
                claims: response.data
            })
        })
        .catch(error => console.log(error))
    }
    render() {
        return (
            <div className="claims-container">
            <h2>Adjuster Claim Management View</h2>
            <p>This section displays all claims an adjuster has worked on and allows for adjuster to view status of total loss agreed upon by insurer / adjuster, and provides messaging platform for investors, tenants, contractors, insurers / adjusters to connect.</p>
            {this.state.claims.map( claim => {
         return (<Claim claim={claim} key={claim.id} />)
     })}
            </div>
        )
    }
}
export default ClaimsContainer;
