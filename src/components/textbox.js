import React from 'react'
import { useContext } from 'react';
import { Mycontext } from '../context';

export default function Textbox() {
    const {text, handlechange, handleList} = useContext(Mycontext);
    

    return (
        <div className='p-2 d-flex'>

            <input type='text' className='form-control' placeholder="add your list here..." value={text} onChange={handlechange} />
            <i className="fa-solid fa-plus btn btn-primary" onClick={handleList}></i>

        </div>
    )
}
