import React, { Component } from 'react';
import axios from 'axios';
import UserProfile from '../../components/tenants/UserProfile'

class ProfileContainer extends Component {
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
            <h2>Tenant User Profile View</h2>
            {this.state.tenants.map( tenant => {
         return (<UserProfile tenant={tenant} key={tenant.id} />)
     })}
            </div>
        )
    }
}
export default ProfileContainer;
