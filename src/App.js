import React, {useState, useEffect} from 'react';
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
 
  
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Person</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {
          products.map(pd => <Product product={pd}></Product>)
        }
      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(0);
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count-1)}>Decrease</button>
      <button onClick={() => setCount(count+1)}>Increase</button>
    </div>
  )
}
function Users(){
  const [user, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setUsers(data));
  });
  return(
    <div>
      <h3>Dynamic Users: {user.length}</h3>
    </div>
  )
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
