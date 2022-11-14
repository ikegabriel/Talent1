import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';


function App() {
  const[talent, setTalent] = useState([{}]);

  useEffect(()=>{
    fetch("https://talent1.up.railway.app/api/talent/").then(
      response => response.json()
    ).then(
      data => {
        setTalent(data)
      }
    )
  }, [])

  return (
    <div className="App">
      <h1>{talent.data}</h1>
    </div>
  );
}

export default App;
