'use client'

import axios from "axios";
import { Suspense, useEffect, useState } from "react"
import { useSearchParams } from "next/navigation";
import ProjectDetail from "@/app/components/ProjectDetail";

export const Search = () =>
{
    const [ loading, setLoading ] = useState(true);
    const [ project, setProject ] = useState(null);
    const params = useSearchParams();
    const projectId = params.get('projectId')

    useEffect(()=>
    {
        getSearch();
    },[])

    const getSearch = async () =>
    {
        try
        {
            const url = `/api/projects/${projectId}`
            const response = await axios.get(url);
            setProject(response.data);
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
        <div className="flex flex-wrap gap-4 p-10">
            <ProjectDetail project={project}/>
        </div>
    )
}

const Loader = () =>
{
    return(
        <Suspense fallback={<>Loading...</>}>
            <Search/>
        </Suspense>
    )
}

export default Loader