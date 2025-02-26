import React 
    from 'react';
import style 
    from './Footer.module.css'

function Footer(){
    return(
        <>
        <footer className={style.footer}>
        <p className={style.footer}>Copyright © Senac 2025</p>
        <p className={style.subfooter}>Todos os direitos reservados.</p>
        </footer>
        </>
    )
}

export default Footer;