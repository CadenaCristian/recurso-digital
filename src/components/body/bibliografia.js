import React from 'react';
import { dataBibliografia } from '../../variables/variables';
import 'bootstrap/dist/css/bootstrap.min.css';

const Bibliografia = () => {
    return (
        <div className='container'>
            <div className='row'>
                <ul>
                    {dataBibliografia.map((dat) => (<li>{dat}</li>))}
                </ul>
            </div>
        </div>
    )
}

export default Bibliografia;