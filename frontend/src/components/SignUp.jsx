import {React, useState } from "react"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {motion} from 'framer-motion'
// import React from 'react'

function SignUp() {
    const [details, setDetails] = useState({
        username:'',
        email: '',
        password: '',
        cpassword:''
    })
    const navigate= useNavigate()
    const handleChange = (e) => {
        const { name, value } = e.target;
        //Override the new data into existing note
        setDetails({
            ...details,
            [name]: value,
        });
        // console.log(details)
    };
    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            if(details.username.length<3 || details.password.length<5){
                toast.info(`Name must be contains at least 3 characters & Password must be contains at least 5 characters`, {
                    position: "top-right",
                    theme: 'colored'
                })
                return false
            }
            if(!(details.password === details.cpassword)){
                toast.info(`Check Password Again...`, {
                    position: "top-right",
                    theme: 'colored'
                })
                return false
            }
            let res = await fetch('http://localhost:5000/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({username:details.username, email: details.email, password: details.password })
            })
            const json = await res.json()
            console.log(json)
            if (json.success) {
                toast.success(`Successfully Signup with username ${details.username}`, {
                    position: "top-right",
                    theme: 'colored'
                })
                localStorage.setItem('token',json.authToken)
                navigate('/')
            } else {
                if(json.error==='User with this email is already exist'){
                    toast.info(`User with this mail is already exist. So, please try another mail...`, {
                        position: "top-right",
                        theme: 'colored'
                    });
                    return false
                }
                toast.error(`Invalid Credentials`, {
                    position: "top-right",
                    theme: 'colored'
                });
            }
        }catch (error) {
            toast.error('Something Went Wrong.', {
              position: "top-right",
              theme: 'colored'
            });
            console.log(error)
          }
    }
  return (
    <>
    <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.7 }}
        >
    <div className="flex items-center justify-center h-screen">
        <div className="sm:w-4/12 w-2/3 m-auto p-4 border-2 border-gray-500 shadow-md shadow-gray-300 rounded-xl">
            <h2 className="text-2xl font-bold mb-4 text-center underline decoration-2">SignUp</h2>
            <form onSubmit={handleSignup}>
            <div className="mb-4">
                    <input
                        type="username"
                        id="username"
                        name="username"
                        value={details.username}
                        onChange={handleChange}
                        placeholder="Enter Username..."
                        className="w-full p-2 border-2 border-gray-400 rounded-md focus:outline-none focus:border-slate-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={details.email}
                        onChange={handleChange}
                        placeholder="Enter Mail..."
                        className="w-full p-2 border-2 border-gray-400 rounded-md focus:outline-none focus:border-slate-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={details.password}
                        onChange={handleChange}
                        placeholder="Enter Password..."
                        className="w-full p-2 border-2 border-gray-400 rounded-md focus:outline-none focus:border-slate-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="password"
                        id="cpassword"
                        name="cpassword"
                        value={details.cpassword}
                        onChange={handleChange}
                        placeholder="Enter Password Again..."
                        className="w-full p-2 border-2 border-gray-400 rounded-md focus:outline-none focus:border-slate-500"
                        required
                    />
                </div>
                <Link className='flex justify-center my-1 mb-3 mx-auto text-xs underline text-blue-500 hover:text-blue-700' to='/login'>Already have an account ?</Link>
                <button
                    className="w-[40%] flex justify-center my-0 mx-auto bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
                >
                    Sign Up
                </button>
            </form>
        </div>
    </div>
    </motion.div>
</>
  )
}

export default SignUp
