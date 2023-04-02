import React from 'react';
import { Nav } from 'react-bootstrap';
import '../css/header.css'

function Header() {
  return (
    <div className="sidebar">
      <img src={require("../imgs/perfil.jfif")} alt="minhafoto" className='foto-header' />
      <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="/about">Sobre</Nav.Link>
        <Nav.Link href="/contact">Serviços</Nav.Link>
        <Nav.Link href="/contact">Portfolio</Nav.Link>
        <Nav.Link href="/contact">Contato</Nav.Link>
      </Nav>
    </div>
  );
}

export default Header