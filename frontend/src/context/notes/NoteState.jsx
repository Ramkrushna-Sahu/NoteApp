import React, { useEffect, useState } from "react";
import NoteContext from "./NoteContext";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NoteState = (props) => {
  const url = 'http://localhost:5000'
  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial)

  //Fetch all Note
  const getNotes = async () => {
    try {
      //API call
      const res = await fetch((`${url}/api/notes/fetchnotes`),
        {
          method: "GET",
          headers: {
            'Content-Type': 'applicattion/json',
            'auth-token': localStorage.getItem('token')
          }
        }
      );
      const json = await res.json()
      setNotes(json)

    } catch (error) {
      toast.error('Something Went Wrong.', {
        position: "top-right",
        theme: 'colored'
      });
      console.log(error)
    }
  }

  //Add a Note
  const addNote = async (title, description, tag) => {
    try {
      //API call
      const res = await fetch(`${url}/api/notes/addnote`, {
        method: "POST",
        headers: {
          'Content-Type': "application/json",
          'auth-token': localStorage.getItem('token')
        },
        body: JSON.stringify({ title, description, tag })
      })

      //Logic to add a note
      const note = await res.json()
      setNotes(notes.concat(note))
      toast.success(`Note added successfully & its title is: ${title}`, {
        position: "top-right",
        theme: 'colored'
      });

    } catch (error) {
      console.log(error)
      toast.error('Something Went Wrong.', {
        position: "top-right",
        theme: 'colored'
      });
    }
  }

  //Delete a Note
  const deleteNote = async (id) => {
    //API call
    try {
      const res = await fetch((`${url}/api/notes/deletenote/${id}`),
        {
          method: "DELETE",
          headers: {
            'Content-Type': 'applicattion/json',
            'auth-token': localStorage.getItem('token')
          }
        }
      );
      const json = await res.json()
      toast.success(`${json.note.title} is Deleted Successfully...`, {
        position: "top-right",
        theme: 'colored'
      });
      //Logic to delete a note
      // console.log('Delete note & id is: ', id)
      const newNotes = notes.filter((note) => {
        return note._id !== id
      })
      setNotes(newNotes)
    } catch (error) {
      toast.error('Something Went Wrong.', {
        position: "top-right",
        theme: 'colored'
      });
      console.log(error)
    }
  }

  //Edit a Note
  const editNote = async (id, title, description, tag) => {
    try {
      //API call
      const res = await fetch(`${url}/api/notes/updateNote/${id}`, {
        method: "PUT",
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          'auth-token': localStorage.getItem('token'),
        },
        body: JSON.stringify({ title, description, tag })
      });
      const json = await res.json()
      // console.log(json)
      //Logic to edit a note
      toast.success(`Updated Successfully...`, {
        position: "top-right",
        theme: 'colored'
      });
      let newNotes = JSON.parse(JSON.stringify(notes))
      // console.log(notes)
      for (let index = 0; index < newNotes.length; index++) {
        const element = newNotes[index];
        if (element._id === id) {
          newNotes[index].title = title ? title : notes[index].title;
          newNotes[index].description = description ? description : notes[index].description;
          newNotes[index].tag = tag ? tag : notes[index].tag;
          break;
        }
      }
      setNotes(newNotes)

    } catch (error) {
      toast.error('Something Went Wrong.', {
        position: "top-right",
        theme: 'colored'
      });
      console.log(error)
    }
  }
  //   const editNote = async (id, title, description, tag) => {
  // const response = await fetch(`${url}/api/notes/updateNote/${id}`, {
  //     method: "PUT",
  //     mode: "cors", // no-cors, *cors, same-origin
  //     cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
  //     credentials: "same-origin", // include, *same-origin, omit
  //     headers: {
  //         "Content-Type": "application/json",
  //         'auth-token': localStorage.getItem('token'),
  //     },
  //     body: JSON.stringify({ title, description, tag })
  // });
  //     if (response.ok) {
  //         alert("Changes Saved Successfully!");
  //     } else {
  //         alert("Unable to save changes of note,try again later!");
  //     }
  //     for (let index = 0; index < notes.length; index++) {
  //         const element = notes[index];
  //         if (element._id === id) {
  //             element.title = title;
  //             element.description = description;
  //             element.tag = tag;
  //         }
  //     }
  // }

  return (
    <NoteContext.Provider value={{ notes, setNotes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}
export default NoteState;