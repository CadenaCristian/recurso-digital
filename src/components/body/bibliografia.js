import React, { useState } from 'react';
import { dataBibliografia, SentenciasSql } from '../../variables/variables';
import 'bootstrap/dist/css/bootstrap.min.css';

const Bibliografia = () => {

    const [showBibliografia, setshowBibliografia] = useState("block");
    const [showSqlSentence, setshowSqlSentence] = useState("none");

    const bibliografiaShow = () => {
        setshowBibliografia("block")
        setshowSqlSentence("none")
    }

    const sqlSentencesShow = () => {
        setshowBibliografia("none")
        setshowSqlSentence("block")
    }

    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <button type='button' className='btn btn-success col-md-4 m-2' onClick={() => bibliografiaShow()}>Bibliografía</button>
                <button type='button' className='btn btn-success col-md-4 m-2' onClick={() => sqlSentencesShow()}>Sentencias SQL</button>
                <div style={{ display: showBibliografia }}>
                    <ul>
                        {dataBibliografia.map((dat, index) => (<li key={index}>{dat}</li>))}
                    </ul>
                </div>
                <div style={{ display: showSqlSentence }}>
                    <SentenciasSql />
                </div>
            </div>
        </div>
    )
}

export default Bibliografia;