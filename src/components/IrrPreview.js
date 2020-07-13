import React, { useEffect } from 'react';
import {
    Redirect
  } from 'react-router-dom';

const IrrPreview = ({ user }) => {

    useEffect(() => {
        document.title = "Przegląd nieprawidłowości"
    },[])


    return (
        user.email !== '' ? 
        <div>
            Strona dostępna dla zalogowanego użytkownika
        </div>
        :
        <Redirect from="/preview" to="/login" />
    )

}

export default IrrPreview;