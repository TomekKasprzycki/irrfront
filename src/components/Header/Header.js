import React from 'react';
import './Header.scss';
import userlogged from '../../img/user-logged.ico';
import nouser from '../../img/no-user.ico';
import { useHistory, useLocation } from 'react-router-dom';


const Header = ({ user }) => {

    const location = useLocation();
    const history = useHistory();

return (
    <div className='header'>
        <div className='header-wrap'>
            <div>
                {location.pathname === '/main' ? 
                    <div className='header-main'>Strona główna</div> : 
                    <div>
                        <button className='header-button'
                                onClick={() => history.push('/main')}>Wróć do strony głównej</button> 
                    </div>}
            </div>
            <h1 className="header-title">System raportowania o nieprawidłowościach  </h1>
            <div className="header-user">
                {user.email === '' ? 
                    <img className="header-image" src={nouser} alt='Użytkonik niezalogowany'/> :
                    <img className="header-image" src={userlogged} alt='Użytkownik zalogowany'/>}
            </div>
        </div>
    </div>
)}


export default Header;
