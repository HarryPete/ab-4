'use client'

import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Projects = () => 
{
    const [loading, setLoading] = useState(true);
    const [projects, setProjects] = useState(null);

    useEffect(() => {
        getProjects();
    }, []);

    const getProjects = async () => 
    {
        try 
        {
            const url = '/api/projects';
            const response = await axios.get(url);
            setProjects(response.data);
        } 
        catch(error) 
        {
            console.log(error);
        }
        finally
        {
            setLoading(false);
        }
    };

    if (loading) return <></>;

    return (
        <div className="space-y-24">
            {projects.map((project, index) => (
                <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className={`${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''} flex lg:flex-row flex-col gap-12 items-top`}
                >
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="lg:w-[60%] w-full space-y-4"
                    >
                        <h1 className="text-green-600 md:text-xl text-lg font-semibold">{project.name}</h1>
                        <p className="text-white leading-loose pb-4">{project.description}</p>
                        <Link href={project.link} target="_blank" className="bg-green-600 text-white p-1 px-2 text-xs rounded-3xl">{project.link}</Link>
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="lg:w-[40%] w-full"
                    >
                        <Image 
                            className=" border border-stone-700 rounded-lg mb-4 w-full" 
                            src={project.pictures[0]} 
                            alt={project.name} 
                            height={100} 
                            width={200}
                        />
                    </motion.div>
                </motion.div>
            ))}
        </div>
    );
};

export default Projects;
