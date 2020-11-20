import React, { useState } from 'react';
import "./PreviewField.scss"

const PreviewFild = ({ irr_types, irr_docs, irrItem, pageUp, pageDown, maxPage, currentPage, readOnly }) => {

    const [description, setDescription] = useState(irrItem.descriptionOfIrr)

    if (description !== irrItem.descriptionOfIrr) {setDescription(irrItem.descriptionOfIrr)}

    const compareArrays = (x, y) => {

        let result = [];
        for (let i = 0; i < y.length; i++) {
            for (let j = 0; j < x.length; j++) {
                if (x[j] === y[i].id) {
                    result.push(irr_types[y[i].id])
                }
            }
        }
        
        return result
    }

    const handleOnChange = (e) => {
        if (readOnly) {setDescription(e.target.value)} 
        
    }

    const typesToRender = compareArrays(irrItem.rodzaj_n_Id, irr_types);


    return (
        <div>
            <div className="irrPreview">

                    <div className="irrPreview-label">NIP:</div>
                    <div className="">{irrItem.beneficiary.nip}</div>
                    <div className="irrPreview-label">Nazwa beneficjenta:</div>
                    <div className="">{irrItem.beneficiary.name}</div>
                    <div className="irrPreview-label">Numer projektu:</div>
                    <div className="">{irrItem.wna}</div>
                    <div className="irrPreview-label">Opis nieprawidłowości:</div>
                    <input className="" value={description} onChange={handleOnChange}/>
                    <div className="irrPreview-label">Tu będzie lista WNP</div>
                    <div>Tu będzie lista...</div>
                    <div className="irrPreview-label">Rodzaj nieprawidłowości:</div>
                    <div className="">{typesToRender.map(irr_type => <span> {irr_type.name} <br /></span>)}</div>
                    <div className="irrPreview-label">Podstawa stwierdzenia:</div>
                    <div className="">{irr_docs.filter(irr_doc => irr_doc.id === irrItem.podst_niepr_id).map(irr_doc => irr_doc.name)}</div>
            
            </div>
            <div>
                {currentPage === 0 ?  <button>Poprzedni</button> : <button onClick={pageDown} >Poprzedni</button>}
                {currentPage === maxPage ? <button>Następny</button> : <button onClick={pageUp}>Następny</button>}
            </div>
        </div>
    )

}

export default PreviewFild;