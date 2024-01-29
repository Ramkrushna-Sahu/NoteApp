// src/components/Navbar.js
import React, { useEffect } from 'react';
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { Link, useLocation, useNavigate } from 'react-router-dom';

const NavBar = ({ menuOpen, toggleMenu }) => {
  let navigate = useNavigate()
  //In mobile screens when someone click on link then automatic navbar will be close
  const handleLinkClick = () => {
    if (menuOpen) {
      toggleMenu();
    }
  };
  const handleLogOut = () => {
    localStorage.removeItem('token')
    navigate('/')
  }
  const location = useLocation();
  // useEffect(() => {
  //   console.log(location.pathname)
  // }, [location])
  return (
    <>
      <div className="border-b-2 rounded-2xl border-gray-600 shadow-md shadow-gray-300">
        <nav className=" p-3 pl-7 ">
          <div className="container mx-auto flex justify-between items-center">
            <div className=" font-bold text-2xl cursor-pointer" onClick={()=> navigate('/')}>NoteApp</div>
            <div className="lg:hidden">
              <button onClick={toggleMenu} className=" mr-3 focus:outline-none">
                {menuOpen ? <AiOutlineClose /> : <HiOutlineMenuAlt3 />}
              </button>
            </div>
            <div className="hidden lg:flex space-x-4 pr-5 ">
              <Link to="/" className={`text-lg font-semibold mt-2 ${location.pathname === '/' ? "text-black " : "text-gray-600"}`}>
                Home
              </Link>
              <Link to="/about" className={`text-lg font-semibold mt-2 ${location.pathname === '/about' ? "text-black" : "text-gray-600"}`}>
                About
              </Link>
              {
                !localStorage.getItem('token')
                  ? <>
                    <Link to='/signup'><button className={`bg-blue-600 text-lg font-semibold px-3 py-2 rounded-md  w-20 hover:bg-blue-700 ${location.pathname === '/signup' ? "text-slate-300" : "text-white"}`}>Signup</button></Link>
                    <Link to='/login'><button className={`bg-blue-600 text-lg font-semibold px-3 py-2 rounded-md  w-20 hover:bg-blue-700 ${location.pathname === '/login' ? "text-slate-300" : "text-white"}`}>Login</button></Link>
                  </>
                  : <>
                    <Link to="/notes" className={`text-lg font-semibold mt-2 ${location.pathname === '/notes' ? "text-black" : "text-gray-600"}`}>
                      Notes
                    </Link>
                    <button className={`bg-blue-600 text-lg font-semibold px-3 py-2 rounded-md w-33 hover:bg-blue-700 text-white`} onClick={handleLogOut}>Log Out</button>
                  </>
              }

            </div>
          </div>
          {menuOpen && (
            <div className="lg:hidden mt-4 ease-in-out duration-500">
              <Link to="/" className={`block py-2 text-lg font-semibold ${location.pathname === '/' ? "text-black" : "text-gray-600"}`} onClick={handleLinkClick}>
                Home
              </Link>
              <Link to="/about" className={`block py-2 text-lg font-semibold ${location.pathname === '/about' ? "text-black" : "text-gray-600"}`} onClick={handleLinkClick}>
                About
              </Link>
              {
                localStorage.getItem('token') ?
                  <>
                    <Link to="/notes" className={`block py-2 text-lg font-semibold ${location.pathname === '/notes' ? "text-black" : "text-gray-600"}`} onClick={handleLinkClick}>
                      Notes
                    </Link>
                    <p onClick={handleLinkClick}><button className={`bg-blue-600 py-2 text-lg font-semibold mr-1 px-3 rounded-md hover:bg-blue-700 text-white`} onClick={handleLogOut}>Log Out</button></p>
                  </>
                  : <>
                    <Link to='/signup' onClick={handleLinkClick}><button className={`bg-blue-600 py-2 text-lg font-semibold mr-1 px-3 rounded-md hover:bg-blue-700 ${location.pathname === '/signup' ? "text-slate-300" : "text-white"}`}>Signup</button> </Link>
                    <Link to='/login' onClick={handleLinkClick}><button className={`bg-blue-600 py-2 text-lg font-semibold ml-1 px-3 rounded-md hover:bg-blue-700 ${location.pathname === '/login' ? "text-slate-300" : "text-white"}`}>Login</button></Link>
                  </>
              }

            </div>
          )}
        </nav>
      </div>
    </>
  );
};

export default NavBar;
