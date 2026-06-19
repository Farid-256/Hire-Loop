'use server'

import { serverMutation } from "../core/server"

export const creatCompany = async(newCompanyData) =>{
    return serverMutation('/api/companies', newCompanyData)
}