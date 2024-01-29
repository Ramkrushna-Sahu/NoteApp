import React from 'react';
import { motion } from 'framer-motion';
const About = () => {
  return (
    <>
    <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2 }}
          >
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 py-10">
      <div className="max-w-3xl px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center"><p className='border-b-2 border-blue-700 inline'>Welcome to <span className="text-blue-700">NoteApp</span></p></h1>
        <div className="bg-slate-200 p-6 rounded-lg shadow-md">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-700 mb-4">
            NoteApp was born out of a simple idea - to provide users with a convenient, intuitive, and secure platform to jot down their thoughts, ideas, and reminders anytime, anywhere. We understand the importance of capturing fleeting moments of inspiration and organizing them into actionable items, and that's why we created NoteApp.
          </p>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-4">
            At NoteApp our mission is to empower individuals to unleash their creativity, increase productivity, and stay organized in their daily lives. We believe that every idea, no matter how small, has the potential to make a difference, and our app aims to be the catalyst for turning those ideas into reality.
          </p>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">What Makes Us Unique</h2>
          <ul className="list-disc list-inside mb-4">
            <li className="text-gray-700"><span className='font-semibold text-xl'>Simplicity: </span> We believe in keeping things simple and intuitive. Our app is designed to be user-friendly, allowing you to focus on your ideas without unnecessary distractions.</li>
            <li className="text-gray-700"><span className='font-semibold text-xl'>Versatility: </span> Whether you're brainstorming for a project, making a to-do list, or simply jotting down random thoughts, NoteApp has you covered. Our flexible features adapt to your needs, ensuring that you have the tools you need when inspiration strikes.</li>
            <li className="text-gray-700"><span className='font-semibold text-xl'>Security: </span> Your privacy and security are our top priorities. With end-to-end encryption and secure cloud storage, you can trust that your notes are safe and accessible only to you.</li>
            <li className="text-gray-700"><span className='font-semibold text-xl'>Sync Across Devices: </span> Seamlessly access your notes from any device, whether it's your smartphone, tablet, or computer. Our app syncs in real-time, ensuring that you always have the latest version of your notes at your fingertips.</li>
          </ul>
          
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-gray-700 mb-4">
            We love hearing from our users! If you have any questions, feedback, or suggestions for NoteApp, please don't hesitate to reach out to us. You can contact us via email, social media, or through our website.
          </p>
        </div>
      </div>
    </div>
    </motion.div>
    </>
  );
};

export default About;
