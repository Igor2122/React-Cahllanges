import React, { Component } from 'react';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import { connect } from 'react-redux';
import * as actionsTypes  from '../store/actions';

class Persons extends Component {

    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.onAddedPerson} />
                {this.props.prsns.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.onRemovedPerson(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        prsns: state.persons,
    };
};

const mapDispatchedProps = dispatch => {
    return {
        onAddedPerson: (name, age) => dispatch({type: actionsTypes.ADD_PERSON, personData: {name: name, age: age}}),
        onRemovedPerson: (id) => dispatch({type: actionsTypes.DELETE_PERSON, personId: id})
    };       
};

export default connect(mapStateToProps, mapDispatchedProps) (Persons);