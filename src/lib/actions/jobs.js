'use server'

import { serverMutation } from "../core/server"

export const creatJobs = async (newJobData)=>{
    return serverMutation('/api/jobs', newJobData)
}