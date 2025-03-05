import Image from "next/image"
import Link from "next/link"

const ProjectCard = ({project}) =>
{

    return(
        <Link href={project.link} className=" flex flex-col gap-2 border rounded w-full lg:w-1/4 md:w-1/2 p-4">
            <Image className="w-full rounded" width={100} height={100} src={project.pictures[0]} alt={project.name}/>
            <h1 className="font-bold text-lg">{project.name}</h1>
            <p className="bg-gray-400 px-2 w-fit rounded text-white text-sm">{project.level}</p>
            <p className="text-sm">{project.description.split('.')[0]}. <span className="text-gray-600">Read more</span></p>
            <div className="flex gap-2">
            {project.skills.map((skill)=>
            (
                <p className="bg-gray-400 px-2 w-fit rounded text-white text-sm">{skill}</p>
            ))}
            </div>
        </Link>
    )
}

export default ProjectCard