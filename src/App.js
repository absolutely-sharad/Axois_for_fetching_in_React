import logo from './logo.svg';
import './App.css';
import React,{ useEffect, useState } from 'react';
import axios from  "axios";

function App() {
const [data, setData] = useState([]);
// useEffect(()=>{
// fetch('https://dummyjson.com/products')
// .then(res => res.json())
// .then(json => setData(json.products));
// },[])
// .catch(err=>console.log(err.message));
// console.log(data);
useEffect(()=>{
  async function fetchData(){
    let response = await axios.get('https://dummyjson.com/products');
    console.log(response.data);
  }
  fetchData();
}, [])
  return (
   <>
   <ul>
   {data.map((value, index) => <li key={index}>{value.title}</li>)}
   </ul>
   </>
  );
}

export default App;
