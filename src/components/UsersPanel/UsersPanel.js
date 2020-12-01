import React, { useEffect, useState, useCallback } from 'react';
import { Redirect } from 'react-router-dom';
import UserInfo from './UserInfo/UserInfo';
import './UsersPanel.scss';


const UsersPanel = ({ user }) => {

    const [users, setUsers] = useState([])
    const [roles, setRoles] = useState([])
    const [institutions, setInstitutions] = useState([])
    const [userToSave, setUserToSave] = useState({name: '',
                                                  email: '',
                                                  roleId: '',
                                                  institution: '',
                                                  token: ''
                                                  })
    const [mayClear, setMayClear] = useState(false)
    
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
        
            fetch(url + userToDelete.id, {
            method: "delete",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': user.token,
            }})
            
    }, [user.token])

    const addUserToDB = useCallback(async  (userToSave) => {

        console.log('zapisuję: ' + userToSave.name)

        const url = "http://localhost:3001/users/" 
        
            fetch(url, {
            method: "post",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': user.token,
            },
            body: JSON.stringify(userToSave)
        })
            
    }, [user.token])

    const getRoles = useCallback(async  () => {
        
        const url = "http://localhost:3001/roles"
        
        fetch(url, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': user.token,
            }})
            .then(result => result.json())
            .then(result => setRoles(result))
            
    }, [user.token])

    const getInstitutions = useCallback(async  () => {
        
        const url = "http://localhost:3001/institutions"
        
        fetch(url, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': user.token,
            }})
            .then(result => result.json())
            .then(result => setInstitutions(result))
            
    }, [user.token])

    useEffect(() => { 
        document.title = "Panel zarządzania użytkownikami";
        getRoles();
        getInstitutions();
        getUsers();
         }
        , [getUsers, getRoles, getInstitutions])

    const handleOnLoad = () => {
         getUsers();
    }

    const deleteUser = (userToDelete) => {

        deleteUserFromDB(userToDelete);
        getUsers();
    }

    const handleOnChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        setMayClear(true)

        setUserToSave({
            ...userToSave,
            [name]: value,
        })
    }

    const claerFields = (fields) => {
        fields[0].children[0].value='';
        fields[1].children[0].value='';
        fields[2].children[0].value='null';
        fields[3].children[0].value='null';
        setUserToSave({name: '',
                      email: '',
                      roleId: '',
                      institution: '',
                      token: ''
                })
        setMayClear(false)
    }

    const createToken = () => {
        return btoa('{ "alg": "HS256", ' +
                           '"typ": "JWT"}') + "." + 
                      btoa('{ "name": "' + userToSave.name + '",' +
                           '"email": "' + userToSave.email +'", ' + 
                           '"roleId": "' + userToSave.roleId +'", '+
                           '"institution": "' + userToSave.institution +'"}');
                    
                    
    }

    const addUser = (e) => {
        if (userToSave.name !== '' &&
            userToSave.email !== '' &&
            userToSave.roleId !== 'null' &&
            userToSave.institution !== 'null') {
                userToSave.token = createToken();
                addUserToDB(userToSave);
                claerFields(e.target.parentElement.parentElement.children);
                getUsers();
            }
    }

    const handleClear = (e) => {
            claerFields(e.target.parentElement.parentElement.children)
    }


    return (
        user.roleId === 'ROLE_ADMIN' ? 
        <div className="userspanel" >
            <div className="userpanel-user-preview">
                <table className="userspanel-table">
                    <tbody>
                        <tr>
                            <th className="tdStyle">Imię i nazwisko</th>
                            <th className="tdStyle">Login</th>
                            <th className="tdStyle">Rola</th>
                            <th className="tdStyle">Instytucja</th>
                            <th className="tdStyle">Usuń</th>
                            <th className="tdStyle">Zmień rolę</th>
                        </tr>
                        {users.map(appUser => { return <UserInfo key={appUser.id} 
                                                                 user={appUser} 
                                                                 deleteUser={deleteUser} 
                                                                 roles={roles} 
                                                                 institutions={institutions} />} )}
                        <tr>
                            <td className="tdStyle"><input onChange={handleOnChange} placeholder="Imię i nazwisko" name="name"/></td>
                            <td className="tdStyle"><input onChange={handleOnChange} placeholder="email" name="email"/></td>
                            <td className="tdStyle">
                                <select name='roleId' onChange={handleOnChange}>
                                    <option key={0} value='null'>--- wybierz ---</option>
                                    {roles.map(role => 
                                    {return <option key={role.id} value={role.name}>{role.name}</option>})}
                                </select>
                            </td>
                            <td className="tdStyle">
                            <select name='institution' onChange={handleOnChange}>
                                    <option key={0} value='null'>--- wybierz ---</option>
                                    {institutions.map(institution => 
                                    {return <option key={institution.id} value={institution.name}>{institution.name}</option>})}
                                </select>
                            </td>
                            <td className="tdStyle"><button className='userspanel-button-save' 
                                                            onClick={addUser}>Dodaj</button>
                            </td>
                            <td className="tdStyle">{mayClear && <button className="userspanel-button-cancel" 
                                                                         onClick={handleClear}>Wyczyść</button>}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

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