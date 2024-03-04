import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setData(json))
  }, [])

  return (
    <section>
      <h1>React Api</h1>
      <div className='grid-container'>
        {data && data.map(d => {
          return (
            <div key={d.id} className='card'>
              <img src={'https://ui-avatars.com/api/?name=' + d.name} alt="" />
              <h2>{d.name}</h2>
              <p>{d.email}</p>
              <p>{d.phone}</p>
              <p>{d.address.street}</p>
            </div>
          );
        })}</div>

    </section>
  )
}

export default App