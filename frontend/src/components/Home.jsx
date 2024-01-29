import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import img from '../../public/notes.png'
// import slice1 from '../../public/Slice 1.png'
import { useNavigate } from 'react-router-dom';
import Features from './Features';

const Home = () => {
  // const featureVariants = {
  //   hidden: { opacity: 0, x: -20 },
  //   visible: { opacity: 1, x: 0 },
  // };
  const gradientTextStyle = {
    // background: 'linear-gradient(45deg, #2E3192, #1BFFFF)',
    background: 'linear-gradient(45deg, #00C0FF, #4218B8)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  };
  const navigate = useNavigate()
  const handleClick = () => {
    (localStorage.getItem('token')) ? navigate('/notes') : navigate('/login')
  }
  return (
    <>
      {/* <div className="min-h-screen flex flex-col justify-center items-center bg-[url('./assets/bg-image.jpg')] bg-cover bg-center bg-no-repeat ">
        <div className=" flex justify-around items-center">
          <div className="mx-10">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              style={{ fontFamily: 'Times New Roman, serif' }}
              className="text-4xl md:text-5xl font-bold my-5"
            >
              WELCOME TO <span className='text-blue-700'>NoteApp</span>
            </motion.h1>
            <p
              className="text-lg my-2 tracking-widest"
              style={{ fontFamily: 'Times New Roman, serif' }}
            >
              Jot It Down, Anywhere, Anytime - Your Ideas, Our App.
            </p>
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              onClick={handleClick}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl my-2"
            >
              GET STARTED
            </motion.button>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2 }}
            className='mx-10'
          >
            <img
              src={img}
              alt='image'
              className="w-64 md:w-80 h-64 md:h-80 rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div> */}
      <div className="h-[85vh] flex flex-col justify-center items-center bg-[url('./assets/bg-image.jpg')] bg-cover bg-center bg-no-repeat ">
        <div className="flex flex-col-reverse md:flex-row justify-center items-center">
          <div className="mx-10 mb-10 md:mb-0 md:w-2/5">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 2 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 3 }}
              // style={{ fontFamily: 'Times New Roman, serif' }}
              className="text-4xl md:text-5xl font-bold my-5 text-center md:text-start tracking-wider"
            >
              WELCOME TO <span className="text-blue-700">NoteApp</span>
            </motion.h1>
            <p
              className="text-lg my-2 tracking-widest text-center md:text-start"
              style={{ fontFamily: 'Times New Roman, serif' }}
            >
              Jot It Down, Anywhere, Anytime - Your Ideas, Our App.
            </p>
            <div className="flex justify-center md:block">

              <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                onClick={handleClick}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl my-2"
              >
                GET STARTED
              </motion.button>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2 }}
            className="mx-10 md:w-2/5 flex justify-center"
          >
            <img
              src={img}
              alt="image"
              className=" md:w-80 h-48 md:h-72 rounded-lg md:shadow-lg "
            />
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
        className="my-3 mb-5"
      >
        <div className="text-center md:text-9xl font-bold opacity-10 text-6xl" style={gradientTextStyle}>Features</div>
        <div className="text-center md:text-4xl font-bold md:mt-[-70px] text-3xl mt-[-50px]"><p className='border-b-2 border-blue-700 inline'>Features of <span className='text-blue-700'>NoteApp</span></p>
        </div>

      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
      >
        <Features />
      </motion.div>
      {/* <div className="flex flex-row justify-between items-center my-11 container px-8">
        <section className='w-[45%]'>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2 }}
          >

            <img
              src={slice1}
              alt='image'
              className="w-5/6 rounded-lg shadow-lg"
            />
          </motion.div>
        </section>
        <section className='w-50%'>
          <div className=" mr-auto rounded-lg shadow-lg mt-4 pb-1">
            <div className="text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                style={{ fontFamily: 'Times New Roman, serif' }}
                className="text-4xl font-bold"
              >
                Features
              </motion.h2>
            </div>
            <motion.ul
              variants={featureVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.5, staggerChildren: 1.5 }}
              className="list-disc list-inside mt-2 mx-auto w-11/12 font-times-new-roman text-lg"
              style={{ fontFamily: 'Times New Roman, serif' }}
            >
              {[
                'Simple interface for adding text-based notes.',
                'Ability to organize notes.',
                'Quick and easy note creation for capturing thoughts or information.',
                'Visual representation of events on the calendar for a clear overview.',
                'Option to set reminders or alarms for upcoming events.',
              ].map((feature, index) => (
                <motion.li key={index} variants={featureVariants} className='my-1'>
                  {feature}
                </motion.li>
              ))}
            </motion.ul>
          </div>

        </section>
      </div> */}
    </>
  )
}

export default Home;



