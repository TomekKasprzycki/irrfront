import React, { useState } from 'react';
import './Header.scss';


const Header = ({ user, logout }) => {

const [buttonVisible, setButtonVisible] = useState(false)

const handleOnClick = (e) => {
    setButtonVisible(!buttonVisible)
}

const handleLogout = () => {
    logout();
    window.location.href='/';
}

return (
    <div className='header'>
        <div className='header-wrap'>
            <h1 className="header-title">System raportowania o nieprawidłowościach  </h1>
            <div className="header-user" >
                <div onClick={handleOnClick}>Użytkownik zalogowany: {user.email !== '' ? user.name : 'brak'}</div>
                {buttonVisible && <div><button className='header-logout-shown' onClick={handleLogout} >Wyloguj</button></div>}
            </div>
        </div>
    </div>
)}

export default Header;