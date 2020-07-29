import React from 'react';

const PreviewFild = ({ irr_types, irr_docs, irrItem }) => {

    console.log(irr_docs)

    return (
        <>
            <div>
                <span>NIP: {irrItem.beneficiary.nip}</span><br/>
                <span>Nazwa beneficjenta: {irrItem.beneficiary.name}</span><br/>
                <span>Numer projektu: {irrItem.wna}</span>
            </div>
            <div>
                <span>Tu będą numery WNP</span><br/>
                <span>Opis nieprawidłowości: {irrItem.descriptionOfIrr}</span><br/>
                <span>Podstawa stwierdzenia {irr_docs.filter(irr_doc => irr_doc.id === irrItem.podst_niepr_id).map(irr_doc => irr_doc.name)} </span><br/>
                <span>Tu będzie lista rodzajów nieprawidłowości</span>
            </div>
    </>
    )

}

export default PreviewFild;