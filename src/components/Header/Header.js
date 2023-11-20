import { Link } from 'react-router-dom'
import { useContext } from 'react'
import {CONTEXT } from '../../contexts/contexts.js'
import './Header.css'

const Header = ({title}) => {
    const {valor} = useContext(CONTEXT)
    console.log("context: ", valor)
    return (
        <>

        <div className="fundo">
            <div className='half'>
                <div className="half-content">
                    <p>{title}</p>
                </div>
            </div>
            <div className='half'>
                <div className="half-content">
                    <nav className='navegador'>
                        <Link to={"/"}>HOME</Link>
                        <Link to={"/produtos"}>PRODUTOS</Link>
                        <Link to={"/contato"}>CONTATO</Link>
                    </nav>
                </div>
            </div>
            
        </div>

        </>
    )
}

export default Header