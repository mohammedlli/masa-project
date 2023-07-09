import React, { useEffect, useRef, useState } from 'react';
import { db } from '../firebase/Firebase';
import {collection,addDoc} from 'firebase/firestore';
import { useNavigate, useLocation } from "react-router-dom";

    export default function FirstAdditionPerson({fireBase}){
        const [date,setData]= useState('');
        const [name,setName]= useState('');
        const [numberphone,setNumberphone]= useState('');
        const inputref = useRef();
        const navigate = useNavigate();
        const location = useLocation();
        const redirectPath = location.state?.path || "/dashbord/search";
        useEffect(()=>{
            inputref.current.focus();
        },[])
        const handleSubmit = async (e) => {
            e.preventDefault();
            try {
            await addDoc(collection(db,'newReviewers'), {
                date,
                name,
                numberphone,
            });
            navigate(redirectPath);
            } catch (err) {
            alert(err);
            }
        };
        
    return<>
    <div className='main-contenar-firstadd'>
    <div className="contenar-firstadd">
        <form onSubmit={handleSubmit} className="form-Add-firstadd">
            <div className='first-line-add-firstadd'>
                <div>
                    <span className='span-add'>الاسم</span>
                    <input 
                    ref={inputref}
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    type="text" 
                    className="input-add-firstadd" /></div>
                <div>
                    <span className='span-add'>رقم الهاتف</span>
                    <input 
                    value={numberphone}
                    onChange={(e)=>setNumberphone(e.target.value)}
                    type="text" 
                    className="input-add-firstadd" /></div>
                <div>
                    <span className='span-add'>تاريخ الاضافة</span>
                    <input  
                    value={date}
                    onChange={(e)=>setData(e.target.value)}
                    type='date'
                    className="input-add-firstadd" />
                </div>
            </div>
            
            <div className='button-form'>
                <button className='button-form-insid'>اضافة</button>
            </div>
        </form>
    </div>
    </div>
    </>
}