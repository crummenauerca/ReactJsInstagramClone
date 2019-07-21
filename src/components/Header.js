import React from 'react';
import { Link } from 'react-router-dom'

import './Header.css'

import camera from '../assets/camera.svg'
import logo from '../assets/instagramLogo.png'

export default function Header() {
  return (
    <header id="main-header">
      <div className="header-content">
        <Link to="/">
          <img src={logo} height="60" />
        </Link>
        <Link to="/new">
        <img src={camera} alt="Enviar publicação" height="52" />
        </Link>
      </div>
    </header>
  )
}
