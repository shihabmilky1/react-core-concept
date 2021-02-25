import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const nayok = ['shihab','salman','rohit','dhoni','sunny','leone']
  const products = [
    {name:'Photoshop',price:'90.99'},
    {name:'illustrator',price:'90.99'},
    {name:'PDF',price:'90.99'},
    {name:'Primer',price:'90.99'}
  ]
    const productNames = products.map(product => product.name);
    
  return (
    <div className="App">
      <header className="App-header">
        <Users></Users>
    <Counter></Counter>


        <ul>
          {
            nayok.map(nayok=> <li>{nayok}</li>)
          }
          <li>{nayok[0]}</li>
          <li>{nayok[1]}</li>
          <li>{nayok[2]}</li>
          <li>{nayok[3]}</li>
        {
          products.map(product => <li>{product.name}</li>)
        }          
        </ul>
    {
      products.map(product => <Product product={product}></Product>)
    }
    <Product product={products[0]} ></Product>
    <Product product={products[1]} ></Product>
    <Product product={products[2]} ></Product>
      </header>
    </div>
  )
} 
function Product(props){
  console.log(props);

  return(
    <div >
      <h2>{props.product.name}</h2>

      <h4>{props.product.price}</h4>
    </div>
  )
}
function Counter(){
  const [count , setCount] = useState(10);
  const countIn = () => {
    const newCount = count + 1;
    setCount(newCount)
  }
  const countEn = () => {
    const newCount = count - 1;
    setCount(newCount);
  }
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={countIn}>Plus</button>
      <button onClick={countEn}>Minus</button>
    </div>
  )
}
function Users(){
  const [users , setUsers] = useState([]);
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])
  return (
    <div>
      <h3>Dynamic User :{users.length} </h3>
      <ul>
      {
         users.map(user => <li style={{border:'1px solid gray',listStyle:'none',padding:'10px'}}>{user.name}</li>)
        }

      </ul>
    </div>
  )
}
export default App;
