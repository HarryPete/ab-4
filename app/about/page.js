'use client'

import { motion } from "framer-motion";
import { FaJs, FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3 } from "react-icons/fa";

const About = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
            <motion.h1 
                className="text-4xl font-bold mb-4"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                About Me
            </motion.h1>
            
            <motion.p 
                className="text-lg max-w-2xl text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
            >
                Hi, I'm a passionate Full-Stack Developer specializing in building elegant and 
                performance-driven web applications. With expertise in Next.js, React, Node.js, Express, 
                and MongoDB, I create seamless user experiences and scalable solutions.
            </motion.p>
            
            <motion.div 
                className="flex gap-6 mt-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <motion.div className="flex flex-col items-center" whileHover={{ scale: 1.2 }}>
                    <FaHtml5 className="text-yellow-500 text-4xl" />
                    <span className="text-sm mt-2">HTML</span>
                </motion.div>
                <motion.div className="flex flex-col items-center" whileHover={{ scale: 1.2 }}>
                    <FaCss3 className="text-yellow-500 text-4xl" />
                    <span className="text-sm mt-2">CSS</span>
                </motion.div>
                
                <motion.div className="flex flex-col items-center" whileHover={{ scale: 1.2 }}>
                    <FaJs className="text-yellow-500 text-4xl" />
                    <span className="text-sm mt-2">JavaScript</span>
                </motion.div>
                <motion.div className="flex flex-col items-center" whileHover={{ scale: 1.2 }}>
                    <FaReact className="text-blue-500 text-4xl" />
                    <span className="text-sm mt-2">React</span>
                </motion.div>
                <motion.div className="flex flex-col items-center" whileHover={{ scale: 1.2 }}>
                    <FaNodeJs className="text-green-500 text-4xl" />
                    <span className="text-sm mt-2">Node.js</span>
                </motion.div>
                <motion.div className="flex flex-col items-center" whileHover={{ scale: 1.2 }}>
                    <FaDatabase className="text-gray-500 text-4xl" />
                    <span className="text-sm mt-2">MongoDB</span>
                </motion.div>
            </motion.div>
            
            <motion.img 
                src="/profile.jpg" 
                alt="Profile" 
                className="w-40 h-40 rounded-full mt-6 shadow-lg"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8 }}
            />
        </div>
    );
};

export default About;
