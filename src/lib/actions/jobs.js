'use server'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
export const creatJobs = async(newJobsData) =>{
    const res = await fetch(`${baseUrl}/api/jobs`, {
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(newJobsData)
    })
    return res.json()
}