import { Project } from "@/models/project.model"

class projectService
{
    async createProject(details)
    {
        try
        {
            const newProject = await Project.create(details);
            await newProject.save();
            return newProject
        }
        catch(error)
        {
            console.log(error);
            throw error
        }
    }

    async getProjects()
    {
        try
        {
            const projects = await Project.find();
            return projects
        }
        catch(error)
        {
            throw error
        }
    }

    async getProjectId(id)
    {
        try
        {
            const project = await Project.findById(id);
            return project
        }
        catch(error)
        {
            throw error
        }
    }

    async deletProjectById()
    {
        try
        {

        }
        catch(error)
        {

        }
    }
}

export default projectService