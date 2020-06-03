import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Font.css'
import '../styles/Login.css'

const Registration = ({ register }) => {

    let userDto = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        password2: '',
        roleDto: '',
        active: '',
        institutionDto: '',
        send: false,
        TOKEN: ''
      }

      const handleOnClick = () => {

        userDto = {
            firstName: document.getElementById('firstNameID').value,
            lastName: document.getElementById('lastNameID').value,
            email: document.getElementById('emailID').value,
            password: document.getElementById('passwordID').value,
            password2: document.getElementById('password2ID').value,
            roleDto: "ROLE_WAITING",
            active: false,
            institutionDto: document.querySelector('input[name=institution]:checked').value,
            send: false,
            TOKEN: ''
          }
          return userDto;
      }

      const handleOnSubmit = (e) => {
          e.preventDefault();
          console.log(userDto)
          register(userDto);
      }


    return(
        <div className='fontStyle'>
            <div>
                <form onSubmit={handleOnSubmit}>
                    <p className='pform'><label className='label'>Imię: <input id='firstNameID' type='text' name='firstName' /></label></p>
                    <p className='pform'><label className='label'>Nazwisko: <input id='lastNameID' type='text' name='lastName' /></label></p>
                    <p className='pform'><label className='label'>email (login):<input id='emailID' type='text' name='email' /></label></p>
                    <p className='pform'><label className='label'>Hasło: <input id='passwordID' type='password' name='password' /></label></p>
                    <p className='pform'><label className='label'>Powtórz hasło:<input id='password2ID' type='password' name='password2' /></label></p>
                    <div className='frame'>
                        <p className='pform'><label className='label'>UMWM: <input className='radio' type='radio' name='institution' value='1' /></label></p>
                        <p className='pform'><label className='label'>MCP: <input className='radio' type='radio' name='institution' value='2' /></label></p>
                        <p className='pform'><label className='label'>WUP: <input className='radio' type='radio' name='institution' value='3' /></label></p>
                    </div>
                    <button className='button' type='submit' onClick={handleOnClick}>Zarejestruj</button>
                </form>
            </div>
            <Link to="/">Powrót do strony głównej</Link>
        </div>
    )
}

export default Registration;