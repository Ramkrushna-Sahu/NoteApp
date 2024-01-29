import React, { useContext, useState } from 'react'
import { MdOutlineDelete, MdOutlineEditNote } from "react-icons/md";
import {motion} from 'framer-motion'
import NoteContext from '../context/notes/NoteContext';
import Modal from './Modal';

// Here is the note component
export default function NoteComponent(props) {
    const { note } = props
    const context = useContext(NoteContext)
    const { deleteNote, editNote } = context

    const [isModalOpen, setModalOpen] = useState(false);
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    const [notes, setNotes] = useState({

        title: '',
        description: '',
        tag: ''
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        //Override the new data into existing note
        setNotes({
            ...notes,
            [name]: value,
        });
        // console.log(note)
    };

    const handleEdit = (e) => {
        e.preventDefault()
        openModal()

        // toast.success('Successfully Updated Note.', {
        //     position: "top-right",
        //     theme: 'colored'
        // })
    }
    const handleDelete = () => {
        deleteNote(note._id)
    }

    const handleUpdateClick = (e) => {
        e.preventDefault()
        console.log(note._id, notes.title, notes.description, notes.tag)
        editNote(note._id, notes.title, notes.description, notes.tag)
        // console.log('Note is Updated...',notes)
        setNotes({
            title: '',
            description: '',
            tag: ''
        })
        closeModal()
    }
    const handleCloseClick = (e) => {
        e.preventDefault()
        closeModal()
    }

    const handleDisable = () => {
        let isDisabled = false;
        if (notes.title && notes.title.length < 5) {
            isDisabled= true;
        }
        if (notes.description && notes.description.length < 5) {
            isDisabled= true;
        }
        
        return isDisabled;
    };
    
    
    
    return (
        <>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.7 }}
            >
            {/* dark:bg-gray-800 dark:border-gray-700 */}
            <div className="max-w-sm p-6  border-2 border-gray-400 rounded-lg shadow-md shadow-gray-300 hover:bg-slate-200 hover:w-[23rem] cursor-pointer">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{note.title}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{note.description}</p>
                <div className="flex justify-end text-xl cursor-pointer">
                    <MdOutlineDelete onClick={handleDelete} className='mx-2' />
                    <MdOutlineEditNote onClick={handleEdit} className='mx-2' />
                </div>
                <Modal isOpen={isModalOpen} onClose={closeModal}>
                    <div className="w-11/12 mx-auto mt-8 p-4 border-2 border-gray-500 shadow-md shadow-gray-300 rounded-xl">
                        <h2 className="text-2xl font-bold mb-4 text-center underline decoration-2">Update A Note</h2>
                        <form>
                            <div className="mb-4">
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    value={notes.title}
                                    onChange={handleChange}
                                    placeholder={note.title}
                                    className="w-full p-2 border-2 border-gray-400 rounded-md focus:outline-none focus:border-slate-500"
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="text"
                                    id="description"
                                    name="description"
                                    value={notes.description}
                                    onChange={handleChange}
                                    placeholder={note.description}
                                    className="w-full p-2 border-2 border-gray-400 rounded-md focus:outline-none focus:border-slate-500"
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="text"
                                    id="tag"
                                    name="tag"
                                    value={notes.tag}
                                    onChange={handleChange}
                                    placeholder={(note.tag)?note.tag:'Enter the tag'}
                                    className="w-full p-2 border-2 border-gray-400 rounded-md focus:outline-none focus:border-slate-500"
                                />
                            </div>
                            <button
                                className={ `text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 ${(handleDisable())?'bg-gray-500':'bg-blue-500'}`}
                                onClick={handleUpdateClick}
                                disabled={handleDisable()}
                            >
                                Update Note
                            </button>
                            <button
                                className=" bg-gray-500 text-white ml-2 py-2 px-4 rounded-md hover:bg-gray-600 transition duration-300"
                                onClick={handleCloseClick}
                            >
                                Close
                            </button>
                        </form>
                    </div>
                </Modal>
            </div>
            </motion.div>
        </>
    )
}
