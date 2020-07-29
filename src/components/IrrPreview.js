import React, { useEffect, useState } from 'react';
import {
    Redirect
  } from 'react-router-dom';
import PreviewField from '../containers/PreviewField'
import {store} from '../redux/store'


const IrrPreview = ({ user, irr_docs, irr_types }) => {

    console.log(store.getState())

    useEffect(() => {
        document.title = "Przegląd nieprawidłowości"
    },[])

    const [irr, setIrr] = useState([])

    const getIrregularities = async () => {
        const url = "http://localhost:3001/irregularities"

        return fetch(url, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': user.token,
            }})
            .then(result => result.json())
    }

        if (irr.length === 0){
        getIrregularities()
            .then(result => setIrr(result))
    }

    
    return (
        user.email !== '' ? 
        <div className="fontStyle">
            {irr.map(irrItem => <PreviewField irrItem={irrItem} />) }            
        </div>
        :
        <Redirect from="/preview" to="/login" />
    )

}

export default IrrPreview;