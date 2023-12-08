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
                criptos.map(({ id, name, priceUsd, rank }) => (
                    [
                        <div className='card-body'>
                            <p key={id} hidden></p>
                            <p className='name'>Nombre: {name}</p>
                            <p className='price'>Precio: $ {priceUsd}</p>
                            <p className='rank'>Ranking : {rank}</p>
                        </div>
                    ]
                ))
            }

        </>
    )
}

export default CardContent
