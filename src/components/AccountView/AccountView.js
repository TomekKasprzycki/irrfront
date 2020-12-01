import React, { useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';


const Registration = ({ user }) => {

    useEffect(()=>{ document.title="Moje konto" },[])

    let userDto ={
    name: '',
    email: '',
    password: '',
    password2: '',
    roleId: '',
    token: ''
}
    

      const handleOnClick = () => {

                userDto = {
            name: document.getElementById('nameID').value,
            email: document.getElementById('emailID').value,
            password: document.getElementById('passwordID').value,
            password2: document.getElementById('password2ID').value,
            roleId: '',
            token: ''
          }
          return userDto;
    
      }

      const handleOnSubmit = (e) => {
          e.preventDefault();
          console.log("submit")
          console.log(userDto)
          //   register(userDto);
      }





    return(
        user.email !== '' ?
        <div className='fontStyle'>
            <div>
                <form onSubmit={handleOnSubmit}>
                    <p className='pName'><label>Nazwa: <input  id='nameID' type='text' name='name' /></label></p>
                    <p className='pLogin2'><label>email (login):<input id='emailID' type='text' name='email' /></label></p>
                    <p className='pPass1'><label>Hasło: <input id='passwordID' type='password' name='password' /></label></p>
                    <p className='pPass2'><label>Powtórz hasło:<input id='password2ID' type='password' name='password2' /></label></p>
 
                    <button className='button2' type='submit' onClick={handleOnClick}>Zarejestruj</button>
                </form>
            </div>
            <Link className='aLink' to="/">Powrót do strony głównej</Link>
        </div>
        : <Redirect to='/'/>
    )
}

export default Registration;