import React from 'react';


const UserInfo = ({ user, deleteUser }) => {

    const handleOnClick = (e) => {
        console.log(e.target.id.substring(6))
    }


    return(
        
        <tr id={user.id}>

            <td className="tdStyle">{user.name}</td>
            <td className="tdStyle">{user.email}</td>
            <td className="tdStyle">{user.roleId}</td>
            <td className="tdStyle">{user.institution}</td>
            <td><button onClick={() => deleteUser(user.id)} id={"delete" + user.id} className="buttonDeleteTable">Usuń</button></td>
            <td><button onClick={handleOnClick} id={"update" + user.id} className="buttonRoleTable">Zmień</button></td>
        </tr>
    )
}

export default UserInfo;