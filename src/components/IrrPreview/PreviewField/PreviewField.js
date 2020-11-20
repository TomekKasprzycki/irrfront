import React, { useState } from 'react';
import "./PreviewField.scss"

const PreviewFild = ({ irr_types, irr_docs, irrItem, changePage, maxPage, readOnly }) => {


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

    console.log(irrItem)

    const [description, setDescription] = useState(irrItem.descriptionOfIrr)

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
                <button>Poprzedni</button>
                <button>Następny</button>
            </div>
        </div>
    )

}

export default PreviewFild;