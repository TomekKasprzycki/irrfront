import React, { useEffect, useState, useCallback } from 'react';
import {
    Redirect
  } from 'react-router-dom';
import PreviewField from '../../containers/PreviewField'


const IrrPreview = ({ user }) => {

    const [irr, setIrr] = useState([]);
    const [page, setPage] = useState(0);

    useEffect(() => {
        document.title = "Przegląd nieprawidłowości";
     
    },[])

    const getIrregularities = useCallback (async () => {

        const url = "http://localhost:3001/irregularities"
        
        fetch(url, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': user.token,
            }})
            .then(result => result.json())
            .then(result => setIrr(result))

    }, [user.token])

    if (irr.length === 0) { 
        console.log('pobieram');
        getIrregularities(); 
    }

    const irrItem = irr[page]
    
    const pageUp = () => {
        setPage(page + 1);
    }

    const pageDown = () => {
        setPage(page - 1)
    }

    
    return (
        user.email !== '' ? 
        <div className="">
            {irr.length !== 0 && <PreviewField 
                                    irrItem={irrItem} 
                                    pageUp={pageUp} 
                                    pageDown={pageDown} 
                                    maxPage={irr.length - 1} 
                                    currentPage={page} 
                                    readOnly={false} />}
        </div>
        :
        <Redirect from="/preview" to="/login" />
    )

}

export default IrrPreview;