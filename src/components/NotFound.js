import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Font.css'

const NotFound = () => {

    return(
        <div className='fontStyle'>
            <p><h1>Błąd 404</h1></p>
            <p><h3>Strona o podanym adresie nie istnieje!</h3></p>
            <Link to="/">Wróć do strony głównej</Link>
        </div>
    )
}

export default NotFound;