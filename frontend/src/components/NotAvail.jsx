import React from 'react'
import slice2 from '../../public/Slice 2.png'
import {motion} from 'framer-motion'
const NotAvail = () => {
  const gradientTextStyle = {
    // background: 'linear-gradient(45deg, #2E3192, #1BFFFF)',
    background: 'linear-gradient(45deg, #D4145A, #FBB03B)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  };
  return (
    <>
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.7 }}
    >
      <div className="mt-7 md:flex justify-evenly items-center block mx-3">
        <img 
          src={slice2}
          alt='empty image'
        />
        <div className="" style={gradientTextStyle}>
        <p className="text-center text-4xl font-semibold my-2" >You have no Notes to Display.</p>
        <br/>
        <p className='text-xl font-normal'>So, please add some notes to use our features.</p>
        </div>
      </div>
      </motion.div>
    </>
  )
}

export default NotAvail
