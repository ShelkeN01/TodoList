import React from 'react'
import { useContext } from 'react';
import { Mycontext } from '../context';

export default function Listpage() {
    const { list, deleteList, updateList } = useContext(Mycontext);

    return (
        <div className='p-2  mb-4'>
            {list?.map((items, i) =>

                <div className='d-flex shadow justify-content-between p-2 mb-2'>
                    <p>{items}</p>
                    <div className='d-flex'>
                        <i className="fa-solid fa-pen-to-square text-success me-2" onClick={() => updateList(i)}></i>
                        <i className="fa-solid fa-trash text-danger" onClick={() => deleteList(i)}></i>
                    </div>
                </div>
            )
            }
        </div>
    )
}
