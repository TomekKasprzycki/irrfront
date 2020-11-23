import React from 'react';
import './MainIrrPrev.scss';

const MainIrrPrev = ({ irr }) => {

    return(
        <div className='mainIrrPrev'>
            <div className='mainIrrPrev-left'>Beneficjent</div>
            <div className='mainIrrPrev-right'>{irr.beneficiary.name}</div>
            <div className='mainIrrPrev-left'>NIP</div>
            <div className='mainIrrPrev-right'>{irr.beneficiary.nip}</div>
            <div className='mainIrrPrev-left'>WNA</div>
            <div className='mainIrrPrev-right'>{irr.wna}</div>
            <div className='mainIrrPrev-left'>Data utworzenia</div>
            <div className='mainIrrPrev-right'>{irr.dateOfCreation}</div>
            <div className='mainIrrPrev-left'>Opis</div>
            <div className='mainIrrPrev-right'>{irr.descriptionOfIrr}</div>
            <div className='mainIrrPrev-left'>Autor</div>
            <div className='mainIrrPrev-right'>{irr.creator}</div>
        </div>
    )
}

export default MainIrrPrev;