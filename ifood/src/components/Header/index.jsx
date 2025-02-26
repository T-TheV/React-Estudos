import React 
    from 'react';
import style 
    from './Header.module.css'

function Header(){
    return(
        <>
        <header className={style.Header}>
        <nav className={style.Header}>
            <ul>
    
                <li><a href="/" >Home</a></li>
                <li><a href="/contato">Contatos</a></li>
                <li><a href="/sobre">Sobre</a></li>
                <li><a href="/contato">Contatos</a></li>
                <li><a href="/sobre">Sobre</a></li>
                <li><a href="/contato">Contatos</a></li>
                <li><a href="/sobre">Sobre</a></li>
            </ul>
        </nav>
        </header>
           
        </>
    )
}

export default Header;