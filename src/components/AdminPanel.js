import React, { useEffect } from 'react';
import {
    Redirect
  } from 'react-router-dom';

const AdminPanel = ({ user }) => {

    useEffect(() => { document.title = "Panel administracyjny" }, [])


    return (
        user.roleId === '1' ? 
        <div>
            Strona dostępna dla Admina
        </div>
        : user.email === '' ?
        <Redirect from="/preview" to="/login" />
        :
        <Redirect from="preview" to ="/" />
            
        )

}

export default AdminPanel;