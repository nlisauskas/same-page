import React, { Component } from 'react';
import axios from 'axios';
import UserProfile from '../../components/insurers/UserProfile'

class ProfileContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            insurers: []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:3001/api/v1/insurers.json')
        .then(response => {
            console.log(response)
            this.setState({
                insurers: response.data
            })
        })
        .catch(error => console.log(error))
    }
    render() {
        return (
            <div className="insurers-container">
            <h2>Insurer User Profile View</h2>
            {this.state.insurers.map( insurer => {
         return (<UserProfile insurer={insurer} key={insurer.id} />)
     })}
            </div>
        )
    }
}
export default ProfileContainer;
