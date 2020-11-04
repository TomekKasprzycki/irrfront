import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = ({ user }) => {

    return(
        <div className=''>
            <h1>Błąd 404</h1>
            <h3>Strona o podanym adresie nie istnieje!</h3>
            {user.email==='' ? <Link to="/">Wróć do strony głównej</Link>
            : <Link to="/main">Wróć do strony głównej</Link>  }
        </div>
    )
}

export default NotFound;