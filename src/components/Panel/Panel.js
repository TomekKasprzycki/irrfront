import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Panel.scss"

const Panel = ({ user }) => {

    const activeLink = {
        color: 'blue'
      }



    return(
        <div className='panel-main'>
            <p className="links"><NavLink exact to="/main" activeStyle={activeLink}>Strona główna</NavLink></p>
            <p className="links"><NavLink exact to="/" activeStyle={activeLink}>Zaloguj</NavLink></p>
            <p className="links"><NavLink exact to="/registration" activeStyle={activeLink}>Zarejestruj</NavLink></p>
            {user.email !== '' ?
            <p className="links"><NavLink exact to="/preview" activeStyle={activeLink}>Przegląd nieprawidłowości</NavLink></p> : "" }
            {user.roleId === 'ROLE_ADMIN' ?
            <p className="links"><NavLink to="/adminpanel" activeStyle={activeLink}>Panel administacyjny</NavLink></p> : "" }
        </div>
    )
}

export default Panel;