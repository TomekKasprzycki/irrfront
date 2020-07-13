import React, {useEffect} from 'react';

const Main = () => {

    useEffect(() => {
        document.title = "Strona główna"
    },[])

    return(
        <div className='fontStyle home'>
            <h1 className='textPosition'>Lorem Ipsum</h1>
            <h2 className='textPosition'>Czym jest Lorem Ipsum?</h2>
            <p className='textPosition'>Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. 
                Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. 
                Pięć wieków później zaczął być używany przemyśle elektronicznym, pozostając praktycznie niezmienionym. 
                Spopularyzował się w latach 60. XX w. wraz z publikacją arkuszy Letrasetu, zawierających fragmenty Lorem Ipsum, 
                a ostatnio z zawierającym różne wersje Lorem Ipsum oprogramowaniem przeznaczonym do realizacji 
                druków na komputerach osobistych, jak Aldus PageMaker</p>
        </div>
    )
}

export default Main;