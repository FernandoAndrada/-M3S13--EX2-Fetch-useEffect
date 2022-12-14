import { useState, useEffect } from 'react'
import './App.css'

interface CovidState {
  state: string;
  cases: number;
  deaths: number;
}

function App() {
  const [data, setData] = useState<CovidState>();
  const [statesName, setStatesName] = useState("");

  useEffect(() => {
    async function getCovid19() {
      const response = await fetch(
        `https://disease.sh/v3/covid-19/states/${statesName}`
      );
      const data = await response.json();
      setData(data);
    }
    getCovid19();
  }, [statesName]);

  return (
    <div className="App">
      <h5>Nome do Estado</h5>
      <p>{data?.state}</p>
      <h5>Número de casos</h5>
      <p>{data?.cases}</p>
      <h5>Número de mortes</h5>
      <p>{data?.deaths}</p>
      <input type="text" onChange={(e) => setStatesName(e.target.value)} />
    </div>
  )
}

export default App
