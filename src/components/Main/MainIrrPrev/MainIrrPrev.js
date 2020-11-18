import React from 'react';
import './MainIrrPrev.scss';

const MainIrrPrev = ({ irr }) => {

    return(
        <div className='mainIrrPrev'>
            <div className='mainIrrPrevLeft'>Beneficjent</div>
            <div>{irr.beneficiary.name}</div>
            <div className='mainIrrPrevLeft'>WNA</div>
            <div>{irr.wna}</div>
            <div className='mainIrrPrevLeft'>Data utworzenia</div>
            <div>{irr.dateOfCreation}</div>
            <div className='mainIrrPrevLeft'>Opis</div>
            <div>{irr.descriptionOfIrr}</div>
            <div className='mainIrrPrevLeft'>Autor</div>
            <div>{irr.creator}</div>
        </div>
    )
}

export default MainIrrPrev;