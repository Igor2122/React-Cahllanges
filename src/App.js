import React, { Component } from 'react';
import './App.css';
import Input from './input/input';
import styles from './App.css';

class App extends Component {
  
  state = {
    length: {length: 0}
  }
  
  listen = (event) => {
    let text = event.target.value;
    let textArr = text.split('');
    let strLength = textArr.length;
    

    this.setState({length: {length: strLength}});
  }


  render() {

    let lengthOuput = null;

    if(this.state.length.length < 5) {


    lengthOuput = (
      <div className={styles.notPassed}>
        <p>The text is too short</p>
      </div>
    
    )
    } else {
      lengthOuput = (
        <div className={styles.passed}> 
          <p>The text is fine</p>
        </div>
      )
    }
  
  
  

    return (
      <div className="App">
          <div>
            <ol>

              <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
              <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
              <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
              <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
              <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
              <li>When you click a CharComponent, it should be removed from the entered text.</li>
            </ol>
            <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
          </div>
          
          
          <Input listen={this.listen} />
          <p>length: {this.state.length.length}</p>
          {lengthOuput}
      </div>

    );
  }
}

export default App;
