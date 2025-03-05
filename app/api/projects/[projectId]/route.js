import dbConnect from "@/dbConfig/dbConnect";
import projectService from "@/services/project.service";
import { NextResponse } from "next/server";
const projectInstance = new projectService();

export async function GET(req, {params})
{
    try
    {
        dbConnect();
        const { projectId } = params 
        const project = await projectInstance.getProjectId(projectId);
        return NextResponse.json(project)
    }
    catch(error)
    {
        return NextResponse.json({message: error.message})
    }
} 