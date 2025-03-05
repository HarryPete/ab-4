'use client'

import { Button } from "@/components/ui/button"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"
import axios from "axios"
import { toast } from "sonner"
import { skills } from "@/utils/skills"

const FormSchema = z.object({
    name: z.string().min(6,{
      message: "Enter valid name",
    }),
    description: z.string().min(30,{
      message: "Description is too short"
    }),
    level: z.string().min(1,{
      message: "Enter level",
    })
  })
  

const ProjectForm = () =>
{

    const [ projectSkills, setProjectSkills ] = useState([])

    const form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: 
        {
            name: "",
            description: "",
            level: "",
        },
    })

    async function onSubmit(data) 
    {

        try
        {
            skills.push({id: skills.length, name: 'Vercel'})
            // const projectData = {...data, projectSkills}
            // const url = '/api/projects'
            // const response = await axios.post(url, projectData);
            // console.log(response.data.message);
        }
        catch(error)
        {
            toast(error)
        } 
    }

    return(
        <Form {...form} className="w-full lg:w-2/3">
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
  
          <h1 className="text-lg font-bold border-b pb-2">New Project</h1>

          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Project name</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
          control={form.control}
          name="level"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Level</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Beginner">Beginner</SelectItem>
                  <SelectItem value="Intermediate">Intermediate</SelectItem>
                  <SelectItem value="Advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex flex-wrap gap-2 text-sm">
        {skills.map((skill)=>
        (
          <p key={skill.id} className={`p-1 text-white rounded cursor-pointer ${projectSkills.includes(skill.name) ? 'bg-green-600' : 'bg-gray-400'}`} onClick={()=> setProjectSkills((prev)=> 
            {
              let skills = []
              if(projectSkills.includes(skill.name))
                skills = projectSkills.filter((data)=> data !== skill.name)
              else
                skills = [...prev, skill.name]
              
              return skills
            })}>{skill.name}</p>
        ))}
        </div>

        <Button type="submit">Submit</Button>
        </form>
      </Form>
    )
}

export default ProjectForm