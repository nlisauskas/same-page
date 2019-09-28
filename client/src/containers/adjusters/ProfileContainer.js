import React, { Component } from 'react';
import axios from 'axios';
import UserProfile from '../../components/adjusters/UserProfile'

class ProfileContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            adjusters: []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:3001/api/v1/adjusters.json')
        .then(response => {
            console.log(response)
            this.setState({
                adjusters: response.data
            })
        })
        .catch(error => console.log(error))
    }
    render() {
        return (
            <div className="adjusters-container">
            <h2>Adjuster User Profile View</h2>
            {this.state.adjusters.map( adjuster => {
         return (<UserProfile adjuster={adjuster} key={adjuster.id} />)
     })}
            </div>
        )
    }
}
export default ProfileContainer;
