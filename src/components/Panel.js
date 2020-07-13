import React from 'react';
import { NavLink } from 'react-router-dom';

const Panel = ({ user }) => {

    const activeLink = {
        color: 'blue'
      }

    return(
        <div className='fontStyle smallFont panel'>
            <p><NavLink exact to="/" activeStyle={activeLink}>Strona główna</NavLink></p>
            <p><NavLink exact to="/login" activeStyle={activeLink}>Zaloguj</NavLink></p>
            <p><NavLink exact to="/registration" activeStyle={activeLink}>Zarejestruj</NavLink></p>
            {user.email !== '' ?
            <p><NavLink exact to="/preview" activeLink={activeLink}>Przegląd nieprawidłowości</NavLink></p> : "" }
            {user.roleId === '1' ?
            <p><NavLink exact to="/adminpanel" activeLink={activeLink}>Panel administacyjny</NavLink></p> : "" }
        </div>
    )
}

export default Panel;