import Image from "next/image"
import { useState } from "react"

const ProjectDetail = ({project}) =>
{
    const [ active , setActive ] = useState(project.pictures[0])

    return(
        <div className=" flex flex-col gap-2">
            <div className="flex items-start gap-4">
                <div className="flex flex-col gap-4">
                    {project.pictures.map((picture)=>
                    (
                        <Image className="w-full rounded cursor-pointer" width={100} height={100} src={picture} alt={project.name} onClick={()=> setActive(picture)}/>
                    ))}
                </div>
                <div className="w-full">
                    <Image className="w-full rounded" width={600} height={600} src={active} alt={project.name}/>
                </div>
            </div>
            <h1 className="font-bold text-lg">{project.name}</h1>
            <p className="bg-gray-400 px-2 w-fit rounded text-white text-sm">{project.level}</p>
            <p className="text-sm">{project.description}</p>
            <div className="flex gap-2">
            {project.skills.map((skill)=>
            (
                <p className="bg-gray-400 px-2 w-fit rounded text-white text-sm">{skill}</p>
            ))}
            </div>
        </div>
    )
}

export default ProjectDetail