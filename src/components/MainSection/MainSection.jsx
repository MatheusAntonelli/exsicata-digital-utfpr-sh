import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import "../../App.css"
function MainSection() {
  return (
    <div className='main-section'>
        <div className="background-image"></div>
        <div className="main-text">
            <h1>Exsicata digital UTFPR-SH</h1>
            <h1>Facilitando e simplificando o acesso a informação</h1>
            <AnchorLink href='#featured'  offset={() => 30}><button className='button-9'>Iniciar</button></AnchorLink>
        </div>
    </div>
  )
}

export default MainSection