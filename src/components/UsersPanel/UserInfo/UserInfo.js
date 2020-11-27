import React, { useState, useCallback } from 'react';
import './UserInfo.scss'
import ConfirmWindow from './ConfirmWindow/ConfirmWindow'

const UserInfo = ({ user, deleteUser, roles, institutions }) => {

    const [toEdit, setToEdit] = useState(false)
    const [userToEdit, setUserToEdit] = useState(user)
    const [toConfirm, setToConfirm] = useState(false)

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

    const handleOnChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setUserToEdit({
            ...userToEdit,
            [name]: value,
        })
    }

    const handleOnClick = (e) => {
        setToEdit(true)
    }

    const handleOnCancel = () => {

        setUserToEdit(user)
        setToEdit(false)

        console.log(userToEdit.name)
    } 

    const handleSave = () => {
        console.log(user.name)
        console.log(userToEdit.name)

        if(! (user.name === userToEdit.name && 
              user.email === userToEdit.email && 
              user.institution === userToEdit.institution && 
              user.roleId === userToEdit.roleId)) {
                user.name=userToEdit.name;
                user.email=userToEdit.email;
                user.institution=userToEdit.institution;
                user.roleId=userToEdit.roleId;
                saveUser();
        }
        setToEdit(false);
    }


    return(
        
        <tr className="userinfo-row" id={user.id}>

            {toEdit ? <td><input type="text" name="name" value={userToEdit.name} onChange={handleOnChange}/></td>
            : <td className="tdStyle">{user.name}</td>}
            {toEdit ? <td><input type="text" name="email" value={userToEdit.email} onChange={handleOnChange}/></td>    
            : <td className="tdStyle">{user.email}</td>}
            {toEdit && roles.length !== 0 ? <td className="tdStyle">
                <select name="roleId" onChange={handleOnChange} value={userToEdit.roleId} >
                    {roles.map(role => 
                        {return <option key={role.id} value={role.name}>{role.name}</option>})}
                </select>
            </td>
            : <td className="tdStyle">{user.roleId}</td>}
            {toEdit && institutions.length !== 0 ?
                <td><select name="institution" onChange={handleOnChange} value={userToEdit.institution}>
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