import React from 'react';
import '../styles/Login.css'
import '../styles/Font.css'

const Login = ({ user, login }) => {
    
    let userDto = {
        name: '',
        email: '',
        password: '',
        password2: '',
        roleId: '',
        token: ''
      }
    
      const hadnleOnSubmit = (e) => {
        e.preventDefault();
        login(userDto);
      }
    
      function handleOnClick() {
        console.log('klik')
        const un = document.getElementById("loginID").value;
        const up = document.getElementById("passID").value;
    
        userDto = {
          email: un,
          password: up
        }
      }
    
    
      return (
          user.email === '' ?
        <div className="divCenter fontStyle">
          <form onSubmit={hadnleOnSubmit}>
            <p className="pform"><label className="label">Login: <input type="text" id="loginID" name="login" /></label></p>
            <p className="pform"><label className="label">Password: <input type="password" id="passID" name="password" /></label></p>
            <button className="button" type="submit" onClick={handleOnClick} >Zaloguj</button>
          </form>
        </div> :
        <div>Jesteś już zalogowany!</div>
      );
}

export default Login;