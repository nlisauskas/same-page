import React, { Component } from 'react';
import axios from 'axios';
import Project from '../../components/investors/Project'

class ProjectsContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            projects: []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:3001/api/v1/projects.json')
        .then(response => {
            console.log(response)
            this.setState({
                projects: response.data
            })
        })
        .catch(error => console.log(error))
    }
    render() {
        return (
            <div className="projects-container">
            {this.state.projects.map( project => {
         return (<Project project={project} key={project.id} />)
     })}
     <p>This page shows details about all not started projects, ongoing projects, completed projects, which property they were for, which contractors worked on them, and a communication platform for the landlord, contractor, tenant, and insurer / adjuster (if applicable).</p>
     <a href="#">Create a new project. Form allows you to select a property, describe the issue, and open the project for quotes from preferred and other contractors.</a>
            </div>
        )
    }
}
export default ProjectsContainer;
