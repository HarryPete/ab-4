import dbConnect from "@/dbConfig/dbConnect";
import projectService from "@/services/project.service";
import { NextResponse } from "next/server";
const projectInstance = new projectService();

export async function POST(req, {params})
{
    try
    {
        dbConnect();

        const details = await req.json();
        const newProject = await projectInstance.createProject(details);
        if(!newProject)
            return NextResponse.json({message: 'Failed to create project'})
        return NextResponse.json({message: 'Project created'})
    }
    catch(error)
    {
        return NextResponse.json({message: error.message})
    }
} 

export async function GET(req, {params})
{
    try
    {
        dbConnect();

        const projects = await projectInstance.getProjects();
        return NextResponse.json(projects)
    }
    catch(error)
    {
        return NextResponse.json({message: error.message})
    }
} 