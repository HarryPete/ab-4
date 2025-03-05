'use client'

import axios from "axios";
import { useEffect, useState } from "react"
import { PinContainer } from "@/components/ui/3d-pin";

const Projects = () =>
{
    const [ loading, setLoading ] = useState(true);
    const [ projects, setProjects ] = useState(null);

    useEffect(()=>
    {
        getProjects();
    },[])

    const getProjects = async () =>
    {
        try
        {
            const url = '/api/projects'
            const response = await axios.get(url);
            setProjects(response.data);
            setLoading(false);
        }
        catch(error)
        {
            setLoading(false);
            console.log(error)
        }
    }

    if(loading)
        return <></>

    return(
        <div className="grid grid-cols-3 gap-4 py-12 text-sm px-[10vw]">
            {projects.map((project)=>
            (
                <PinContainer title={project.link}
                href={project.link}
                target='_blank'>
                <div className="flex basis-full flex-col p-4 tracking-tight bg-neutral-50 text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                    <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">{project.name}</h3>
                    <div className="text-base !m-0 !p-0 font-normal">
                        <span className="text-slate-500 ">
                        {project.description}
                        </span>
                    </div>
                <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
                </div>
                </PinContainer>
            ))}
        </div>
    )
}

export default Projects