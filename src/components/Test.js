import '../styles/Login.css'
import React from 'react';

const Test = ({ user }) => {

    console.log(user);
    const url = '/api/pictures/upload'

    const getTest = async () =>{
    const result = await fetch(url, {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
          'Authorization': user.token
        },
        body: {
          'fileToUpload': fileToUpload
        }
      })
    }

    const handleOnSubimit = (e) => {
      e.preventDefault();
    }

    return(
      <form onSubmit={handleOnSubimit}>
        <input type="file" name="fileToUpload" />
        <button className="button" type="button" onClick={getTest}>Naduś</button>
        </form>
    )
}

export default Test;