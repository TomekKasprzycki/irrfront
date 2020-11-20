import React, {useEffect, useState} from 'react';
import './Main.scss'
import MainIrrPrev from './MainIrrPrev/MainIrrPrev';
import { Link } from 'react-router-dom';


const Main = ({ user }) => {

    useEffect(() => {
        document.title = "Strona główna"
    },[])

    const [idList, setIdList] = useState([])
    const [irrId, setIrrId] = useState(false);
    const [irrObj, setIrrObj] = useState({id:''});
    
    const takeAllIrr = async () => {
        const url ="http://localhost:3001/irregularities"

        const data = await fetch(url);
        const irrArray = await data.json();
        const createdIdList = irrArray.map(irr => irr.id)

        return createdIdList;
    }
    
    idList.length === 0 && takeAllIrr().then(res => setIdList(res))
    
    const handleOnChange = (e) => {
        e.stopPropagation();
        setIrrId(true);
        console.log(irrId)
        if (e.target.value !== 'null') {
            selectIrr(e.target.value).then(result => setIrrObj(result))
            } 
    }

    const handleButtonClick = () => {


    }



    const selectIrr = async (id) => {
        const url ="http://localhost:3001/irregularities?id=" + id

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
                    <select className='button-select' onChange={(handleOnChange)} >
                        {!irrId && <option value='null'>-- wybierz --</option>}
                        {idList.map(id => <option value={id}>{id}</option>)}
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