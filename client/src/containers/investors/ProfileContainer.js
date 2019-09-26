import React, { Component } from 'react';
import axios from 'axios';
import UserProfile from '../../components/investors/UserProfile'

class ProfileContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            investors: []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:3001/api/v1/investors.json')
        .then(response => {
            console.log(response)
            this.setState({
                investors: response.data
            })
        })
        .catch(error => console.log(error))
    }
    render() {
        return (
            <div className="investors-container">
            {this.state.investors.map( investor => {
         return (<UserProfile investor={investor} key={investor.id} />)
     })}
            </div>
        )
    }
}
export default ProfileContainer;
