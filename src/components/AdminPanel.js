import React, { useEffect, useState, useCallback } from 'react';
import {
    Redirect
  } from 'react-router-dom';
import UserInfo from './UserInfo';
import '../styles/UserTable.css'

const AdminPanel = ({ user }) => {

    const [users, setUsers] = useState([])  
    
    const getUsers = useCallback(async  () => {
        
        const url = "http://localhost:3001/users"
        console.log(user.token)
        
        return fetch(url, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': user.token,
            }})
            .then(result => result.json())
            
            
        }, [user.token])

        useEffect(() => { document.title = "Panel administracyjny";
        getUsers().then(result => setUsers(result)) }, [getUsers])

    const handleOnLoad = async () => {

        setUsers(await getUsers())
        
    }


    return (
        user.roleId === 'ROLE_ADMIN' ? 
        <div className="fontStyle mainDiv" >
            <table className="tableStyle">
            
                <tbody>
                    <tr>
                        <th className="tdStyle">Name</th>
                        <th className="tdStyle">Login</th>
                        <th className="tdStyle">Rola</th>
                        <th className="tdStyle">Instytucja</th>
                        <th className="tdStyle">Usuń</th>
                        <th className="tdStyle">Zmień rolę</th>
                    </tr>
                    {users.map(appUser => { return <UserInfo user={appUser} />} )}
                </tbody>
            </table>
            <button onClick={handleOnLoad} >Naduś</button>

            Strona dostępna dla Admina
        </div>
        : user.email === '' ?
        <Redirect from="/preview" to="/login" />
        :
        <Redirect from="preview" to ="/" />
            
        )

}

export default AdminPanel;