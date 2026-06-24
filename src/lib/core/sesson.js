import { headers } from "next/headers"
import { auth } from "../auth"
import { redirect } from "next/navigation"

export const getUserSesson = async () => {
    const sesson = await auth.api.getSession({
        headers: await headers()
    })
    return sesson?.user || null
}

export const getUserToken = async() =>{
    const sesson = await auth.api.getSession({
        headers: await headers()
    })
    return sesson?.session?.token || null
}



export const requireRole = async (role) => {
    const user = await getUserSesson()
    if (!user) {
        redirect('/auth/login')
    }

    if (user.role !== role) {
        redirect('/unauthorized')
    }
    return user
}