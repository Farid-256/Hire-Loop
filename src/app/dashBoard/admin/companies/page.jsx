import { getCompanies } from "@/lib/api/company";
import { approveCompany, rejectCompany } from "@/lib/actions/company";

const AdminCompaniesPage = async () => {
    const companies = await getCompanies();

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold text-white">All Companies</h2>
                <p className="text-gray-400">Total Companies: <span className="text-cyan-400 font-semibold">{companies.length}</span></p>
            </div>

            <div className="bg-[#1f2937] rounded-3xl overflow-hidden shadow-2xl overflow-x-auto">
                <table className="w-full min-w-[1200px]">
                    <thead>
                        {/* সব <th> এক লাইনে – কোনো ফাঁকা স্পেস নেই */}
                        <tr className="border-b border-gray-700 bg-gray-800">
                            <th className="px-6 py-5 text-left text-gray-300 font-medium">Company</th>
                            <th className="px-6 py-5 text-left text-gray-300 font-medium">Category</th>
                            <th className="px-6 py-5 text-left text-gray-300 font-medium">Location</th>
                            <th className="px-6 py-5 text-left text-gray-300 font-medium">Employees</th>
                            <th className="px-6 py-5 text-center text-gray-300 font-medium">Jobs</th>
                            <th className="px-6 py-5 text-left text-gray-300 font-medium">Status</th>
                            <th className="px-6 py-5 text-left text-gray-300 font-medium">Submitted</th>
                            <th className="px-6 py-5 text-center text-gray-300 font-medium w-48">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {companies.map((company) => (
                            <tr key={company._id} className="border-b border-gray-700 hover:bg-gray-800 transition-colors">
                                <td className="px-6 py-5 font-medium text-white">{company.companyName}</td>
                                <td className="px-6 py-5 text-gray-300">{company.category}</td>
                                <td className="px-6 py-5 text-gray-300">{company.location}</td>
                                <td className="px-6 py-5 text-gray-300">{company.employeeRange}</td>
                                {/* Applications – সেন্টার অ্যালাইন */}
                                <td className="px-6 py-5 text-center">
                                    <span className="inline-flex items-center justify-center bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
                                        {company.applications || 0}
                                    </span>
                                </td>
                                <td className="px-6 py-5">
                                    <span className={`px-4 py-1.5 rounded-full text-sm font-medium
                                        ${company.status === 'approved' ? 'bg-green-500/20 text-green-400' :
                                            company.status === 'rejected' ? 'bg-red-500/20 text-red-400' :
                                                'bg-yellow-500/20 text-yellow-400'}`}>
                                        {company.status?.toUpperCase() || 'PENDING'}
                                    </span>
                                </td>
                                <td className="px-6 py-5 text-gray-400 text-sm">
                                    {company.createAt ? new Date(company.createAt).toLocaleDateString() : 'N/A'}
                                </td>
                                <td className="px-6 py-5">
                                    <div className="flex gap-3 justify-center">
                                        {company.status !== 'approved' && (
                                            <form action={approveCompany}>
                                                <input type="hidden" name="companyId" value={company._id} />
                                                <button
                                                    type="submit"
                                                    className="px-5 py-2 bg-green-600 hover:bg-green-700 text-white text-sm rounded-xl transition cursor-pointer"
                                                >
                                                    Approve
                                                </button>
                                            </form>
                                        )}

                                        {company.status !== 'rejected' && (
                                            <form action={rejectCompany}>
                                                <input type="hidden" name="companyId" value={company._id} />
                                                <button
                                                    type="submit"
                                                    className="px-5 py-2 bg-red-600 hover:bg-red-700 text-white text-sm rounded-xl transition cursor-pointer"
                                                >
                                                    Reject
                                                </button>
                                            </form>
                                        )}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminCompaniesPage;