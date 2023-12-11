import { NavLink } from "react-router-dom"

const Menu =()=>{
    return (
        <nav className="mai-menu">
            <ul>
                <li><NavLink to="/">Inicio</NavLink></li>
                <li><NavLink to="/saludo">Saludo</NavLink></li>
                <li><NavLink to="/pagina">Pagina</NavLink></li>
            </ul>
        </nav>
    )
}

export default Menu