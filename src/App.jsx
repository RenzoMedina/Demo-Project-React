import { useEffect, useState } from 'react'
import axios from 'axios'


function App() {

  const [criptos, setCriptos] = useState()

  useEffect(()=>{
    axios.get(`${import.meta.env.VITE_API_URL}assets`)
    .then((data)=>{
      console.log(data)
      setCriptos(data.data.data)
    })
    .catch(()=>{
      console.log("Error en la petición")
    })
  },[])

  if(!criptos) return <><span>Cargando.....</span></>

  return (
    <>
      <h1>Hola mundo</h1>
      <ol>
      {
        criptos.map(({id,name, priceUsd}) =>(
          <li key={id}>Nombre: {name}, Precio: {priceUsd}</li>
        ))
      }
      </ol>
    </>
  )
}

export default App
