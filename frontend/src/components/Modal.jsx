import React from 'react';
import { IoClose } from "react-icons/io5";
import {motion} from 'framer-motion'
const Modal = ({ isOpen, onClose, children }) => {
  const modalClasses = isOpen ? 'fixed inset-0 overflow-y-auto' : 'hidden';

  return (
    <>
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.7 }}
    >
    <div className={`none ${modalClasses}`}>
      <div className=" inset-0 bg-gray-700 opacity-90 fixed top-0 right-0 left-0 bottom-0" onClick={onClose}></div>
      <div className="max-w-[500px] my-[10%] mx-auto bg-slate-200 rounded-lg overflow-hidden relative">
        <div className="p-5">
            <IoClose className="absolute top-3 right-3 text-xl cursor-pointer" onClick={onClose}/>
          {children}
        </div>
      </div>
    </div>
    </motion.div>
    </>
  );
};

export default Modal;
