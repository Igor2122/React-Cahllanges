import React, { Component } from 'react';

class Course extends Component {

    state = {
        id: null,
        title: null
    }

    componentDidMount () {
        console.log(this.props);
        this.setState({id: this.props.match.params.id})
    }
    
    render () {
        return (
            <div>
                <h1>_COURSE_TITLE_</h1>
                <p>You selected the Course with ID: _ID_: <bold> {this.state.id}</bold></p>
            </div>
        );
    }
}

export default Course;