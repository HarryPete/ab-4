import mongoose, { Schema } from "mongoose";

const projectSchema = new Schema({
    name:
    {
        type: String,
        required: true
    },
    description:
    {
        type: String,
        required: true
    },
    level:
    {
        type: String,
        enum: ['Beginner', 'Intermediate', 'Advanced']
    },
    skills: [String],
    pictures: [String],
    link: String
})

export const Project = mongoose.models?.Project || mongoose.model('Project', projectSchema);

// VKRBqVqGbuFUYSEK