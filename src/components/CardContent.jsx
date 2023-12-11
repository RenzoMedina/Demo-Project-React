import { useEffect, useState } from 'react'
import axios from 'axios'
const CardContent = () => {
    const [criptos, setCriptos] = useState([])

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}assets`)
            .then((data) => {
                console.log(data)
                setCriptos(data.data.data)
            })
            .catch(() => {
                console.log("Error en la petición")
            })
    }, [])

    if (!criptos) return <><span>Cargando.....</span></>
    return (
        <>

            {
                criptos.map(({ id, name, priceUsd, rank,symbol }) => (
                    [
                        <div key={id} className='card-body'>
                            <p className='name'>Nombre: {name}</p>
                            <p className='price'>Precio: $ {parseFloat(priceUsd).toFixed(4)}</p>
                            <p className='symbol'><span>Código:</span> {symbol}</p>
                            <p className='rank'>Ranking : {rank}</p>
                        </div>
                    ]
                ))
            }

        </>
    )
}

export default CardContent
