import React, {useEffect, useState} from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import './Main.scss';
import MainIrrPrev from './MainIrrPrev/MainIrrPrev';


const Main = ({ user }) => {

    useEffect(() => {
        document.title = "Strona główna"
    },[])

    const history = useHistory();
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
        console.log(e.target)
        if (e.target.value !== 'null') {
            selectIrr(e.target.value).then(result => setIrrObj(result))
            } 
    }

    const handleButtonClick = () => {

        console.log("clik")
    }



    const selectIrr = async (id) => {
        const url ="http://localhost:3001/irregularities?id=" + id

        const data = await fetch(url);
        const irrArray = await data.json();
        const irr = irrArray[0]

        return irr;
    }
    

    return(
        user.email !== '' ? 
        <div className='main'>
            <div className='main-part'>
                <button id={1} className='button'>Sprawdź zamawiającego</button>
                <button id={2} className='button'>Wyświetl sprawy jednostki</button>
                <button id={3} className='button'>Wprowadź nową nieprawidłowość</button>
                <button id={4} onClick={handleButtonClick} className='button'>Wprowadź zmiany w nieprawidłowości nr
                    <select className='button-select' onChange={(handleOnChange)} >
                        {!irrId && <option value='null'>-- wybierz --</option>}
                        {idList.map(id => <option key={id} value={id}>{id}</option>)}
                    </select>
                </button>
                <button id={5} className='button'>Pokaż wiadomości</button>
                <button id={6} className='button'>Zamknij</button>
            </div>
            <div>
                {irrObj.id !== '' ?
                <MainIrrPrev irr={irrObj}/> :
                <div className='main-not-selected'>Nie wybrano nieprawidłowości</div>}
            </div>
            {user.roleId === 'ROLE_ADMIN' && <div className='main-admin'>
                <div className="main-right-part">
                    <button id={7} className='button' 
                            onClick={()=>history.push('/preview')}>Przeglądaj nieprawidłowości</button>
                    <button id={8} className='button'
                            onClick={()=>history.push('/')}>Generuj raporty</button>
                    <button id={9} className='button'
                            onClick={()=>history.push('/')}>Przywróć sprawę</button>
                </div>
                <div className="main-right-part">
                    <button id={10} className='button'
                            onClick={()=>history.push('/userspanel')}>Zarządzaj użytkownikami</button>
                    <button id={11} className='button'
                            onClick={()=>history.push('/')}>Panel administracyjny</button>
                </div>
            </div>}
            

        </div>
        : <Redirect to="/"/>
    )
}

export default Main;