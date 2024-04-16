import React from 'react'
import { useContext } from 'react'
import { Mycontext } from '../context'

export default function Updatinglist() {
    const { updatetext, handleupdateText, changedList } = useContext(Mycontext);
    return (
        <div className="container d-flex justify-content-center">
            <div className="shadow  p-4 w-50 m-5">
                <h1 className="text-center mb-3 mt-3">Update The list </h1>
                <div className='d-flex p-2'>

                    <input type='text' className='form-control' value={updatetext} onChange={handleupdateText} />
                    <i className="fa-solid fa-plus btn btn-primary" onClick={changedList}></i>

                </div>

            </div>
        </div>
    )
}
