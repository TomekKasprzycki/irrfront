import React, { useEffect, useState, useCallback } from 'react';
import { Redirect } from 'react-router-dom';
import UserInfo from './UserInfo/UserInfo';
import './UsersPanel.scss';
import axios from 'axios';


const UsersPanel = ({ user }) => {

    const [users, setUsers] = useState([])
    
    const getUsers = useCallback(async  () => {
        
        const url = "http://localhost:3001/users"
        
        return fetch(url, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': user.token,
            }})
            .then(result => result.json())
            .then(result => setUsers(result))
            
    }, [user.token])

    const deleteUserFromDB = useCallback(async  (userToDelete) => {

        const url = "http://localhost:3001/users/" 
        
            fetch(url + userToDelete, {
            method: "delete",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': user.token,
            }})

            // axios.delete(url + userToDelete.id)
            
    }, [user.token])

    useEffect(() => { 
        document.title = "Panel administracyjny";
        getUsers(); }
        , [getUsers])

    const handleOnLoad = () => {
         getUsers();
    }

    const deleteUser = (userToDelete) => {

        deleteUserFromDB(userToDelete);
        getUsers();
    }


    return (
        user.roleId === 'ROLE_ADMIN' ? 
        <div className="userspanel" >
            <table className="userspanel-table">
            
                <tbody>
                    <tr>
                        <th className="tdStyle">Name</th>
                        <th className="tdStyle">Login</th>
                        <th className="tdStyle">Rola</th>
                        <th className="tdStyle">Instytucja</th>
                        <th className="tdStyle">Usuń</th>
                        <th className="tdStyle">Zmień rolę</th>
                    </tr>
                    {users.map(appUser => { return <UserInfo key={appUser.id} user={appUser} deleteUser={deleteUser} />} )}
                </tbody>
            </table>
            <button onClick={handleOnLoad} >Naduś</button>

            Strona dostępna dla Admina
        </div>
        : user.email === '' ?
        <Redirect from="/preview" to="/login" />
        :
        <Redirect from="/preview" to ="/" />
            
        )

}

export default UsersPanel;