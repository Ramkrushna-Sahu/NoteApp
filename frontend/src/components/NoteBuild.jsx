import React, { useState, useContext } from 'react'
import Notes from './Notes';
import NoteContext from '../context/notes/NoteContext';
import {motion} from 'framer-motion'

export default function NoteBuild() {
    const [note, setNote] = useState({
        title: '',
        description: '',
        tag: '',
    });
    const context = useContext(NoteContext);
    const { addNote } = context;


    const handleChange = (e) => {
        const { name, value } = e.target;
        //Override the new data into existing note
        setNote({
            ...note,
            [name]: value,
        });
        // console.log(note)
    };

    const handleClick = (e) => {
        try {
            e.preventDefault()
            addNote(note.title,note.description,note.tag)
            setNote({title: "", description: "", tag: ""})
            
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <>
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.7 }}
        >
            <div className="">
                <div className="w-11/12 mx-auto mt-8 p-4 border-2 border-gray-500 shadow-md shadow-gray-300 rounded-xl">
                    <h2 className="text-2xl font-bold mb-4 text-center underline decoration-2">Add A Note</h2>
                    <form >
                        <div className="mb-4">
                            <input
                                type="text"
                                id="title"
                                name="title"
                                value={note.title}
                                onChange={handleChange}
                                placeholder='Enter The Title of the Notes...'
                                className="w-full p-2 border-2 border-gray-400 rounded-md focus:outline-none focus:border-slate-500"
                                minLength={5}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="text"
                                id="description"
                                name="description"
                                value={note.description}
                                onChange={handleChange}
                                placeholder='Enter The Description of the Notes...'
                                className="w-full p-2 border-2 border-gray-400 rounded-md focus:outline-none focus:border-slate-500"
                                minLength={5}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="text"
                                id="tag"
                                name="tag"
                                value={note.tag}
                                onChange={handleChange}
                                placeholder='Enter The Tag of the Notes...'
                                className="w-full p-2 border-2 border-gray-400 rounded-md focus:outline-none focus:border-slate-500"
                            />
                        </div>
                        <button
                            className=" bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
                            onClick={handleClick}
                            disabled={note.title.length<5 || note.description.length<5}
                        >
                            Add Note
                        </button>
                    </form>
                </div>
            <Notes/>
            </div>
            </motion.div>
        </>
    );
}
