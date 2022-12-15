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
      <h2>Covid19 nos EUA</h2>
      <div className='Card'>
      <input type="text" placeholder='Digite o nome do Estado.' onChange={(e) => setStatesName(e.target.value)} />
        <h4>Nome do Estado</h4>
        <p>{data?.state}</p>
        <h4>Número de casos</h4>
        <p>{data?.cases}</p>
        <h4>Número de mortes</h4>
        <p>{data?.deaths}</p>
        
      </div>
    </div>
  )
}

export default App
