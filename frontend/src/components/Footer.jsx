import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8 md:px-40">
            <div className="container mx-auto px-8 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-1x lg:grid-cols-3 gap-8">
                    <div className="text-center md:text-left">
                        <h3 className="text-lg font-bold mb-4">Contact Us</h3>
                        <p className="text-sm mx-3 my-2">Email: example@example.com</p>
                        <p className="text-sm mx-3 my-2">Phone: +91 1234567890</p>
                    </div>
                    <div className="flex justify-center flex-col">
                        <div className="flex justify-center items-center space-x-6">
                            <Link to="example@example.com" className="text-white hover:text-gray-400">
                                <FaEnvelope className="text-xl" />
                            </Link>
                            <Link to="https://github.com/Ramkrushna-Sahu" className="text-white hover:text-gray-400">
                                <FaGithub className="text-xl" />
                            </Link>
                            <Link to="https://in.linkedin.com/in/ramkrushna-sahu-402821255" className="text-white hover:text-gray-400">
                                <FaLinkedin className="text-xl" />
                            </Link>
                        </div>
                        <div className="mt-5 text-justify">
                            Stay connected with our NoteApp community! Get the latest updates and tips by following us on social media. We value your feedback; share your thoughts, suggestions, and experiences with us. NoteApp isn't just a platform; it's a collaborative journey toward better organization and productivity. Join us in revolutionizing how we manage and share notes. Connect with us today and be part of the note-taking revolution!
                        </div>
                    </div>
                    <div>
                        <ul className="text-center md:text-right">
                            <li className="mb-2">
                                <Link to="/about" className="text-gray-400 hover:text-white">
                                    About
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/about" className="text-gray-400 hover:text-white">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li className='mb-2'>
                                <Link to="/" className="text-gray-400 hover:text-white">
                                    Help Center
                                </Link>
                            </li>
                            {
                                (localStorage.getItem('token')) ?
                                    <li className=''>
                                        <Link to="/notes" className="text-gray-400 hover:text-white">
                                            Notes
                                        </Link>
                                    </li>
                                    : <></>
                            }
                        </ul>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-700 pt-8 text-center">
                    <p className="text-sm text-gray-400">
                        © 2024 NoteApp. All rights reserved.
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                        Created with ❤️ by{' '}
                        <Link
                            to='/'
                            className="text-gray-400 hover:text-white underline"
                        >
                            NoteApp
                        </Link>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
