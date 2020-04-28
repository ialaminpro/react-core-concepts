import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Anwar','Jafor Iqbal','Alamgir', 'Salman']
  return (
    <div className="App">
      <header className="App-header">
        <p>My First React Paragraph</p>
        <Person name={nayoks[0]}></Person>
        <Person name={nayoks[1]}></Person>
      </header>
    </div>
  );
}
function Person(props){
  const personStyle={
    border: '2px solid red',
    margin: '10px'
  }
  console.log(props);
  return (
  <div style={personStyle}>
    <h1>Name: {props.name}</h1>
    <h3>Hero of the year</h3>
  </div>
  )
}

export default App;
