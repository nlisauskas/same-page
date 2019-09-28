import React, { Component } from 'react';
import axios from 'axios';
import Document from '../../components/adjusters/Document'

class DocumentsContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            documents: []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:3001/api/v1/documents.json')
        .then(response => {
            console.log(response)
            this.setState({
                documents: response.data
            })
        })
        .catch(error => console.log(error))
    }
    render() {
        return (
            <div className="documents-container">
            <h2>Adjuster Documents View</h2>
            {this.state.documents.map( document => {
         return (<Document document={document} key={document.id} />)
     })}
     <p>This page shows all documents an adjusters has uploaded to a specific case. This might just live in the case management section.</p>
            </div>
        )
    }
}
export default DocumentsContainer;
