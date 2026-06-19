import { serverFetch } from "../core/server"

export const getApplicationsByAplicant = async (applicantId)=>{
    return serverFetch(`/api/application?applicantId=${applicantId}`)
}