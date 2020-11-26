import React, { useState, useCallback } from 'react';
import './UserInfo.scss'
import ConfirmWindow from './ConfirmWindow/ConfirmWindow'

const UserInfo = ({ user, deleteUser }) => {

    const [toEdit, setToEdit] = useState(false)
    const [roles, setRoles] = useState([])
    const [institutions, setInstitutions] = useState([])
    const [userRole, setUserRole] = useState(user.roleId)
    const [userInstitution, setUserInstitution] = useState(user.institution)
    const [userName, setUserName] = useState(user.name)
    const [userEmail, setUserEmail] = useState(user.email)
    const [toConfirm, setToConfirm] = useState(false)

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

    const saveUser = useCallback(async  () => {
        
        const url = "http://localhost:3001/users/" + user.id
        console.log(url)
        
        fetch(url, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': user.token,
            },
            body: JSON.stringify(user)
        })

            
    }, [user])

    const handleOnClick = (e) => {
        setToEdit(true)
        getRoles();
        getInstitutions();
    }

    const handleOnRoleChanege = (e) => {
        setUserRole(e.target.value)
        // user.roleId = e.target.value
    }

    const handleOnInstitutionChanege = (e) => {
        setUserInstitution(e.target.value)
        // user.institution = e.target.value
    }

    const handleOnNameChange = (e) => {
        setUserName(e.target.value)
        // user.name = e.target.value;
    }

    const handleOnEmailChange = (e) => {
        setUserEmail(e.target.value)
        // user.email = e.target.value;
    }

    const handleOnCancel = () => {
        setUserName(user.name)
        setUserEmail(user.email)
        setUserInstitution(user.institution)
        setUserRole(user.roleId)
        setToEdit(false)

        console.log(userName)
    } 

    const handleSave = () => {
        console.log(user.name)
        console.log(userName)

        if(! (user.name === userName && 
              user.email === userEmail && 
              user.institution === userInstitution && 
              user.roleId === userRole)) {
                user.name=userName;
                user.email=userEmail;
                user.institution=userInstitution;
                user.roleId=userRole;
                saveUser();
        }
        setToEdit(false);
    }


    return(
        
        <tr className="userinfo-row" id={user.id}>

            {toEdit ? <td><input type="text" value={userName} onChange={handleOnNameChange}/></td>
            : <td className="tdStyle">{user.name}</td>}
            {toEdit ? <td><input type="text" value={userEmail} onChange={handleOnEmailChange}/></td>    
            : <td className="tdStyle">{user.email}</td>}
            {toEdit && roles.length !== 0 ? <td className="tdStyle">
                <select onChange={handleOnRoleChanege} value={userRole} >
                    {roles.map(role => 
                        {return <option key={role.id} value={role.name}>{role.name}</option>})}
                </select>
            </td>
            : <td className="tdStyle">{user.roleId}</td>}
            {toEdit && institutions.length !== 0 ?
                <td><select onChange={handleOnInstitutionChanege} value={userInstitution}>
                    {institutions.map(item => {
                        return <option key={institutions.id} value={item.name}>{item.name}</option>
                    } )}
                </select>
                </td>
            : <td className="tdStyle">{user.institution}</td>}
            <td>{toEdit ? <button className="userinfo-button-cancel"
                                  onClick={handleOnCancel}>
                                      Cofnij
                                  </button> 
                        : !toConfirm ? <button className="userinfo-button-delete" 
                        onClick={()=>setToConfirm(true)} 
                        id={user.id} >Usuń</button>
                        : <ConfirmWindow deleteUser={deleteUser} 
                                                     setToConfirm={setToConfirm}
                                                     user={user} />}
            </td>
            <td>
                {toEdit ? <button className="userinfo-button-save"
                                  onClick={handleSave} 
                                  id={user.id}>Zapisz</button>
                
                : <button className="userinfo-button-edit"
                          onClick={handleOnClick} 
                          id={user.id} >Zmień</button>}
            </td>
        </tr>
    )
}

export default UserInfo;