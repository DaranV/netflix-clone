import React from 'react'
import './Header.css'

function Header() {
  return (
    <header>
        <div className='header--logo'>
            <a href='/'>
                <img src='https://logos-marques.com/wp-content/uploads/2021/03/Netflix-logo.png' alt="logo" />
            </a>
        </div>
        <div className='header--user'>
            <a href='/'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117' alt="profil" />
            </a>
                
        </div>
    </header>
  )
}

export default Header