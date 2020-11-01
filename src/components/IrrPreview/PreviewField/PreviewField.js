import React from 'react';
import "./PreviewField.scss"

const PreviewFild = ({ irr_types, irr_docs, irrItem }) => {


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

    const typesToRender = compareArrays(irrItem.rodzaj_n_Id, irr_types);

    console.log("irrItem")
    console.log(irrItem)

    return (
        <div className="irrPreview">

                <div className="">NIP:</div>
                <div className="">{irrItem.beneficiary.nip}</div>
                <div className="">Nazwa beneficjenta:</div>
                <div className="">{irrItem.beneficiary.name}</div>
                <div className="">Numer projektu:</div>
                <div className="">{irrItem.wna}</div>
                <div className="">Opis nieprawidłowości:</div>
                <div className="">{irrItem.descriptionOfIrr}</div>
                <div className="">Tu będzie lista WNP</div>
                <div>Tu będzie lista...</div>
                <div className="">Rodzaj nieprawidłowości:</div>
                <div className="">{typesToRender.map(irr_type => <span> {irr_type.name} <br /></span>)}</div>
                <div className="">Podstawa stwierdzenia:</div>
                <div className="">{irr_docs.filter(irr_doc => irr_doc.id === irrItem.podst_niepr_id).map(irr_doc => irr_doc.name)}</div>
           
        </div>
    )

}

export default PreviewFild;