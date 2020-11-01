import React from 'react';
import './Header.scss';
import logo from './../../img/logo.png'

const Header = ({ user }) => {

return (
    <div className='header'>
        <img className="header-img" src={logo} alt="logo"/>
        <div className='header-wrap'>
        <h1 className="header-title">System raportowania nieprawidłowości  </h1>
        <div className="header-user">Użytkownik zalogowany: {user.email !== '' ? user.name : 'brak'}</div>
        </div>
    </div>
)}

export default Header;