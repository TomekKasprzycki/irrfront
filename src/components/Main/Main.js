import React, {useEffect} from 'react';
import './Main.scss'

const Main = ({ user }) => {

    useEffect(() => {
        document.title = "Strona główna"
    },[])

    

    return(
        <div className='main'>
            <button className=''>Przeglądaj nieprawidłowości</button>
            {user.roleId === 'ROLE_ADMIN' && <button className=''>Panel administracyjny</button>}

        </div>
    )
}

export default Main;