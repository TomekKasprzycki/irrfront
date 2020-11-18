import React, {useEffect, useState} from 'react';
import './Main.scss'
import MainIrrPrev from './MainIrrPrev/MainIrrPrev';
import { Link } from 'react-router-dom';


const Main = ({ user }) => {

    useEffect(() => {
        document.title = "Strona główna"
    },[])

    const [irrId, setIrrId] = useState('null');
    const [irrObj, setIrrObj] = useState({id:''});

    const handleOnClick = (e) => {
        e.stopPropagation();
        setIrrId(e.target.value);
    }

    const handleButtonClick = () => {
        console.log(irrId + " is " + typeof(irrId))
        console.log(irrId !== 'null')
        if (irrId !== 'null') {
            console.log("???")
        selectIrr().then(result => setIrrObj(result))
        } else {
        alert("Nie wybrano nieprawidłowości!")}
    }

    const selectIrr = async () => {
        const url ="http://localhost:3001/irregularities?id=" + irrId

        const data = await fetch(url);
        const irrArray = await data.json();
        const irr = irrArray[0]

        return irr;
    }
    

    return(
        <div className='main'>
            <div className='main-part'>
                <button className='button'>Sprawdź zamawiającego</button>
                <button className='button'>Wyświetl sprawy jednostki</button>
                <button className='button'>Wprowadź nową nieprawidłowość</button>
                <div>
                    <button onClick={handleButtonClick} className='button'>Wprowadź zmiany w nieprawidłowości nr
                    <select className='button-select' onClick={(handleOnClick)} >
                        <option value='null'>-- wybierz --</option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                    </select></button>

                </div>
                <button className='button'>Pokaż wiadomości</button>
                <button className='button'>Zamknij</button>
            </div>
            <div>
                {irrObj.id !== '' ?
                <MainIrrPrev irr={irrObj}/> :
                <div>Nie wybrano nieprawidłowości</div>}
            </div>
            {user.roleId === 'ROLE_ADMIN' && <div className='main-admin'>
                <Link to="/preview">
                <button className='button'>Przeglądaj nieprawidłowości</button>
                </Link>
                <button className='button'>Panel administracyjny</button>
            </div>}
            

        </div>
    )
}

export default Main;