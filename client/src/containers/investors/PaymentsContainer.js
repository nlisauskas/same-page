import React, { Component } from 'react';
import axios from 'axios';
import Property from '../../components/Property'

class PropertiesContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            properties: []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:3001/api/v1/properties.json')
        .then(response => {
            console.log(response)
            this.setState({
                properties: response.data
            })
        })
        .catch(error => console.log(error))
    }
    render() {
        return (
            <div className="properties-container">
            {this.state.properties.map( property => {
         return (<Property property={property} key={property.id} />)
     })}
            </div>
        )
    }
}
export default PropertiesContainer;
