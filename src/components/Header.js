import React from 'react';

const Header = ({ user }) => {

return (
    <div className='header fontStyle textHeader'>
        <span className="title">Nieprawidłowości  </span>
        <span className="user">Użytkownik zalogowany: {user.email !== '' ? user.name : 'brak'}</span>
        </div>
)}

export default Header;