import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {

    return(
        <div className=''>
            <h1>Błąd 404</h1>
            <h3>Strona o podanym adresie nie istnieje!</h3>
            <Link to="/main">Wróć do strony głównej</Link>
        </div>
    )
}

export default NotFound;