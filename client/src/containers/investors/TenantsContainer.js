import React, { Component } from 'react';
import axios from 'axios';
import Tenant from '../../components/investors/Tenant'

class TenantsContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            tenants: []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:3001/api/v1/tenants.json')
        .then(response => {
            console.log(response)
            this.setState({
                tenants: response.data
            })
        })
        .catch(error => console.log(error))
    }
    render() {
        return (
            <div className="tenants-container">
            {this.state.tenants.map( tenant => {
         return (<Tenant tenant={tenant} key={tenant.id} />)
     })}
            </div>
        )
    }
}
export default TenantsContainer;
