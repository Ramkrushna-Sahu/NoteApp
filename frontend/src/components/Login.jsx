import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'

const Login = () => {
    const [details, setDetails] = useState({
        email: '',
        password: ''
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
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            if(details.password.length<5){
                toast.info(`Password must be contains at least 5 characters`, {
                    position: "top-right",
                    theme: 'colored'
                })
                return false
            }
            let res = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: details.email, password: details.password })
            })
            const json = await res.json()
            // console.log(json)
            if (json.success) {
                toast.success(`Logged in Successfully...`, {
                    position: "top-right",
                    theme: 'colored'
                })
                localStorage.setItem('token',json.authToken)
                navigate('/')
            } else {
                toast.error(`Invalid Credentials`, {
                    position: "top-right",
                    theme: 'colored'
                });
            }
        } catch (error) {
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
                    <h2 className="text-2xl font-bold mb-4 text-center underline decoration-2">Login</h2>
                    <form onSubmit={handleLogin}>
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
                        <Link className='flex justify-center my-1 mb-3 mx-auto text-xs underline text-blue-500 hover:text-blue-700' to='/signup'>Create a new account?</Link>
                        <button
                            className="w-[40%] flex justify-center my-0 mx-auto bg-blue-500 text-white py-2 px-4 font-bold rounded-md hover:bg-blue-600 transition duration-300"

                        // disabled={}
                        >
                            Log In
                        </button>
                    </form>
                </div>
            </div>
            </motion.div>
        </>
    )
}

export default Login
