import React, { Component } from 'react';
import './App.css';
import Userinput from './User/UserInput.js';
import Useroutput from './User/UserOutput';

class App extends Component {

  state = {
    username: {name: 'Igorek'}
  }

  changeNameHandler = () => {
    this.setState({username: {name: 'Igoresha'}});
    console.log('Clicked');
  }

  changeOutPutHnadler = (event) => {
    this.setState({username: {name: event.target.value}});
  }
  

  render() {
    return (
      <div className="App">
        <Userinput changed={this.changeOutPutHnadler} />
        <Useroutput name={this.state.username.name}/>
        <button onClick={this.changeNameHandler}>Change Name</button>
      </div>
    );
  }
}

export default App;
