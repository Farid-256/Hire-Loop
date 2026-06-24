'use server'

import { revalidatePath } from "next/cache"
import { serverMutation } from "../core/server"

export const creatCompany = async (newCompanyData) => {
    return serverMutation('/api/companies', newCompanyData)
}

export const updateCompany = async (id, data) => {
    const result =  serverMutation(`/api/companies/${id}`, data, 'PATCH')
    revalidatePath('/dashBoard/admin/companies')
    return result
}


export const approveCompany = async (formData) => {
    'use server'
    const companyId = formData.get('companyId')

    const data = { status: 'approved' }
    return updateCompany(companyId, data)
}

export const rejectCompany = async (formData) => {
    'use server'
    const companyId = formData.get('companyId')

    const data = { status: 'rejected' }
    return updateCompany(companyId, data)
}