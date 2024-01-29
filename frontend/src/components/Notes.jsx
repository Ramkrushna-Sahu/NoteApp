import React, { useContext, useEffect, useState } from 'react'
import NoteComponent from './NoteComponent'
import NoteContext from '../context/notes/NoteContext'
import NotAvail from './NotAvail';
import { useNavigate } from 'react-router-dom';
import {motion} from 'framer-motion'
export default function Notes() {
    const context = useContext(NoteContext);
    const { notes,getNotes } = context;
    const gradientTextStyle = {
        // background: 'linear-gradient(45deg, #2E3192, #1BFFFF)',
        background: 'linear-gradient(45deg, #00C0FF, #4218B8)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      };
    const navigate = useNavigate()
    // Here we displayed all the notes
    useEffect( ()=>{
        if(localStorage.getItem('token')){
            // console.log('component rendered')
            getNotes()
        }else{
            navigate('/login')
        }
    },[])
    
    return (
        <>
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.7 }}
        >
            <div className="mt-4">
                <div className="text-center text-8xl font-bold opacity-10" style={gradientTextStyle}>Notes</div>
                <div className="text-center text-4xl font-bold mt-[-56px]">Your Notes
                </div>
                {notes.length===0 && <NotAvail/>}
                <div className="grid px-12 my-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-7">
                    {notes.map((note) => {
                        return (
                            <NoteComponent key={note._id} note={note}/>
                        )
                    })}
                </div>
            </div>
            </motion.div>
        </>
    )
}
