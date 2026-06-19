import { serverFetch } from "../core/server"
import { getUserSesson } from "../core/sesson"

export const getRecruiterCompany = async (recruiterId) => {
    return serverFetch(`/api/my/companies?recruiterId=${recruiterId}`)
}

export const getLoggedInRecruiterCompany = async() =>{
    const user = await getUserSesson()
    return getRecruiterCompany(user?.id)
}