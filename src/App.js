import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Razzak','Jafor Iqbal','Alamgir', 'Salman', 'Bappi']
  const products = [
    {name: 'Photoshop', price:'$90.99'},
    {name: 'Illustrator', price:'$60.99'},
    {name: 'PDF Reader', price:'$6.99'}
  ]
  const productNames = products.map(product => product.name);
  const nayokNames = nayoks.map(nayok => nayok);
  console.log(nayoks);
  console.log(nayokNames);
  console.log(products);
  console.log(productNames);
  
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Person</p>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
        </ul>
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product>
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
  const {name,price} = props.product;
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy now</button>
    </div>
  )
}
function Person(props){
  const personStyle={
    border: '2px solid red',
    margin: '10px'
  }

  return (
  <div style={personStyle}>
    <h1>Name: {props.name}</h1>
    <h3>Hero of the year</h3>
  </div>
  )
}

export default App;
