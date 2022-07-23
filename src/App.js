import './App.css';
import logo from './Dataset/Logo_BrawlhallaHammer512.png'
import { useEffect, useState } from 'react';
import Stats from './CharracterChart';


function App() {

  const [showStats, setShowStats] = useState(false)
  const [data, setData] = useState()
  const [charData, setCharData] = useState()

  const showCharacter = async(data) => {
    setCharData(data)
    setShowStats(true)
  }

  useEffect(() => {
    const getData =  async () => {
      const response = await fetch('csvjson.json', {headers: 
               {'Content-Type': 'application/json','Accept': 'application/json'}
           });
      const thisData = await response.json();
      setData(thisData)
    }
    getData()
    console.log(data)
  }, [])


  return (
   <>
   <h1> <img src={logo} alt="logo" className='logo' /> Brawlhalla Characters Stats</h1>
   <h2>Choose your legend</h2>
   <main>
    <div className="container">
    {
      !showStats ? (
      
      data?.map((current) => {
        return(
          <div key={current.name} className="chip" onClick={() => {showCharacter(current)}}>{current.name}</div>
        )
      })
     
      ) : (
        <Stats data={charData} setShowStats={setShowStats}></Stats>
      )
    }
    </div>
   </main>
   </>
  );
}

export default App;
