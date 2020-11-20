import React, { useEffect, useState, useCallback } from 'react';
import {
    Redirect
  } from 'react-router-dom';
import PreviewField from '../../containers/PreviewField'
import axios from 'axios';


const IrrPreview = ({ user }) => {

    const [irr, setIrr] = useState([]);
    const [page, setPage] = useState(0);

    const getIrregularities = useCallback (() => {
        const url = "http://localhost:3001/irregularities"

        console.log('uruchomiony fetch')
        
        return fetch(url, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': user.token,
            }})
            .then(result => result.json())
    }, [user.token])

    if (irr.length === 0) { 
        console.log('pobieram');
        getIrregularities().then(result => setIrr(result)); 
    }

    useEffect(() => {
        document.title = "Przegląd nieprawidłowości";
     
    },[])


    const irrItem = irr[page]
    
    const setPageNumber = (number) => {
        setPage(number);
    }

    console.log(irr)

    
    return (
        user.email !== '' ? 
        <div className="">
            <PreviewField irrItem={irrItem} changePage={setPageNumber} maxPage={irr.length} readOnly={false} />         
        </div>
        :
        <Redirect from="/preview" to="/login" />
    )

}

export default IrrPreview;