'use client'

import { Mail, Phone, User } from "lucide-react";
import Herosection from "./components/Herosection";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import { motion } from "framer-motion";

export default function Home()
{

    return(
        <div className="md:text-sm text-xs">
            <Navbar/>
            <div className="py-12 md:space-y-24 space-y-12 px-[5vw]">
                <Herosection/>
                <motion.h1  
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-white md:text-3xl text-xl font-semibold" id="toolbox">My Toolbox</motion.h1 >
                <TechStack/>
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}  
                    className="text-white md:text-3xl text-xl font-semibold" id="projects">Work in Action</motion.h1 >
                <Projects/>
            </div>

            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut" }} 
                className="p-6 text-white" id="contact">

                <div className="p-12 bg-stone-900 rounded-xl text-white flex md:flex-row flex-col md:items-center items-start justify-between md:space-y-0 space-y-6">
                    <div className="flex items-center gap-2">
                        <User className="text-green-600" size={20}/>
                        <p>Abhishek PM</p>
                    </div>

                    <div className="flex items-center gap-2">
                        <Mail className="text-green-600" size={20}/>
                        <p>codeabhishek18@gmail.com</p>
                    </div>
                    {/* <div className='bg-green-600 text-xl p-2 rounded text-black font-semibold'>{'<code18/>'}</div> */}
                    <div className="flex items-center gap-2">
                        <Phone className="text-green-600" size={20}/>
                        <p>+91 9986144053</p>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}