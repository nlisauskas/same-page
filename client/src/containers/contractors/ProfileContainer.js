import React, { Component } from 'react';
import axios from 'axios';
import UserProfile from '../../components/contractors/UserProfile'

class ProfileContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            contractors: []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:3001/api/v1/contractors.json')
        .then(response => {
            console.log(response)
            this.setState({
                contractors: response.data
            })
        })
        .catch(error => console.log(error))
    }
    render() {
        return (
            <div className="contractors-container">
            <h2>Contractor User Profile View</h2>
            {this.state.contractors.map( contractor => {
         return (<UserProfile contractor={contractor} key={contractor.id} />)
     })}
            </div>
        )
    }
}
export default ProfileContainer;
