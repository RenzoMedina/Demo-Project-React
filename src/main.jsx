import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from './components/partials/Menu.jsx'
import Saludo from './components/Saludo'

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <BrowserRouter>
        <Menu/>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/saludo' element={<Saludo />} />
            </Routes>
        </BrowserRouter>
    </>

)
