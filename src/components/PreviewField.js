import React from 'react';
import '../styles/PreviewField.css'

const PreviewFild = ({ irr_types, irr_docs, irrItem }) => {


    const compareArrays = (x, y) => {

        let result = [];
        for (let i=0; i<y.length; i++){
            for (let j=0; j<x.length; j++){
                if (x[j]===y[i].id){
                    result.push (irr_types[y[i].id])
                }
            }
        }
        return result
    }

    const typesToRender = compareArrays(irrItem.rodzaj_n_Id, irr_types);

    return (
        <div className="general">
            <div className="partContainer">
                <div className="frameContainer">
                    <div className="labeldiv">NIP:&nbsp;&nbsp;</div>
                    <div className="contentsdiv">{irrItem.beneficiary.nip}</div>
                </div>
                <div className="frameContainer">
                    <div className="labeldiv">Nazwa beneficjenta:&nbsp;&nbsp;</div>
                    <div className="contentsdiv">{irrItem.beneficiary.name}</div>
                </div>
                <div className="frameContainer">
                    <div className="labeldiv">Numer projektu:&nbsp;&nbsp;</div>
                    <div className="contentsdiv">{irrItem.wna}</div>
                </div>
            </div>
            <div className="partContainer">
                <div className="frameContainer"><div className="labeldiv">WNP:&nbsp;&nbsp;</div><div className="contentsdiv">Tu będzie lista WNP</div></div>
                <div className="frameContainer"><div className="labeldiv">Opis nieprawidłowości:&nbsp;&nbsp;</div><div className="contentsdiv">{irrItem.descriptionOfIrr}</div></div>
                <div className="frameContainer"><div className="labeldiv">Podstawa stwierdzenia:&nbsp;&nbsp;</div><div className="contentsdiv">{irr_docs.filter(irr_doc => irr_doc.id === irrItem.podst_niepr_id).map(irr_doc => irr_doc.name)}</div></div>
                <div className="frameContainer"><div className="labeldiv">Rodzaj nieprawidłowości:&nbsp;&nbsp;</div>
                    <div className="contentsdiv">{typesToRender.map(irr_type => <span> {irr_type.name} <br/></span>)}</div></div>
            
            </div>
        </div>
    )

}

export default PreviewFild;