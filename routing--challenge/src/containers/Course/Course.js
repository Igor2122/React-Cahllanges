import React, { Component } from 'react';

class Course extends Component {

    state = {
        id: null,
    }

    componentDidMount () {
        console.log(this.props);
        this.setState({id: this.props.match.params.id})
    }
    
    render () {
        return (
            <div>
                <h1>{this.props.location.title}</h1>
                <p>You selected the Course with ID: {this.props.location.id}</p>
            </div>
        );
    }
}

export default Course;