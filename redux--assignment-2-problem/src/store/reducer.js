import * as actionsTypes  from './actions';

const initialState = {
    persons: []
};

const reducer = (state = initialState, action) => {
    // eslint-disable-next-line
    switch (action.type) {
        case actionsTypes.ADD_PERSON:
            const newPerson = {
            id: Math.random(), // not really unique but good enough here!
            name: action.personData.name,
            age: action.personData.age,
            };
            return {
                ...state,
               persons: state.persons.concat(newPerson)
            };
        case actionsTypes.DELETE_PERSON:
            return{
                ...state,
                persons: state.persons.filter(person => person.id !== action.personId)
            };
    }
    
    return state;
    
};

export default reducer;