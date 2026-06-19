import { headers } from "next/headers"
import { auth } from "../auth"

export const getUserSesson = async()=>{
    const sesson = await auth.api.getSession({
        headers: await headers()
    })
    return sesson?.user || null
}