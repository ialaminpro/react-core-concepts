import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Anwar','Jafor Iqbal','Alamgir', 'Salman']
  const products = [
    {name: 'Photoshop', price:'$90.99'},
    {name: 'Illustrator', price:'$60.99'},
    {name: 'PDF Reader', price:'$6.99'}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Person</p>
        <Product product={products[0]}></Product>
        <Person name={nayoks[0]}></Person>
        <Person name={nayoks[1]}></Person>
      </header>
    </div>
  );
}
function Product(props){
  const productStyle={
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'200px',
    width:'200px',
    float:'left'
  }
  return (
    <div style={productStyle}>
      <h3>{props.product.name}</h3>
      <h5>{props.product.price}</h5>
      <button>Buy now</button>
    </div>
  )
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
