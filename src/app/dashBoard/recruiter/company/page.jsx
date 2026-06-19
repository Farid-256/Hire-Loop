import { getUserSesson } from "@/lib/core/sesson"
import CompanyProfile from "./CompanyProfile"
import { getRecruiterCompany } from "@/lib/api/company"


const CompanyPage = async() => {
    const user = await getUserSesson()
    const company = await getRecruiterCompany(user?.id)
    console.log(company)
    return (
        <div>
            <CompanyProfile recruiter={user} recruiterCompany={company}></CompanyProfile>
        </div>
    )
}

export default CompanyPage