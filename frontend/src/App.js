import react, { useState } from 'react'
import axios from 'axios'
import './App.css';

function App() {
  const [infos, setInfos] = useState("none")

  const getInfos = () => {
    axios.get('/getmedata').then((res) => {
      setInfos(res.data);
    })
  }
  return (
    <div className="App">
      <h1>Hello</h1>
      <button onClick={getInfos}>Get infos</button>
      <br/><br/>
      <span>{infos}</span>

    </div>
  );
}

export default App;
