import React, { useEffect, useState, useCallback } from 'react';
import {
    Redirect
  } from 'react-router-dom';
import PreviewField from '../../containers/PreviewField'
import {store} from '../../redux/store'


const IrrPreview = ({ user }) => {

    console.log(store.getState())

    const [irr, setIrr] = useState([])

    const getIrregularities = useCallback (() => {
        const url = "http://localhost:3001/irregularities"

        return fetch(url, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': user.token,
            }})
            .then(result => result.json())
    }, [user.token])

    useEffect(() => {
        document.title = "Przegląd nieprawidłowości";

        getIrregularities().then(result => setIrr(result))
    },[getIrregularities])

    
    return (
        user.email !== '' ? 
        <div className="">
            {irr.map(irrItem => <PreviewField irrItem={irrItem} />) }            
        </div>
        :
        <Redirect from="/preview" to="/login" />
    )

}

export default IrrPreview;