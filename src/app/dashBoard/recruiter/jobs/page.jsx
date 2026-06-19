import { getLoggedInRecruiterCompany } from '@/lib/api/company';
import { getCompanyJobs } from '@/lib/api/jobs';
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";

const RecruiterJobs = async () => {
    const company = await getLoggedInRecruiterCompany()
    console.log(company)
    const jobs = await getCompanyJobs(company._id)

    return (
        <div className="bg-gray-900 rounded-3xl border border-gray-800 overflow-hidden">

            {/* Header */}
            <div className="p-6 border-b border-gray-800 flex justify-between items-center">
                <div>
                    <h3 className="text-xl font-bold text-white">Job Listings</h3>
                    <p className="text-gray-400 text-sm mt-1">Total: {jobs.length} jobs</p>
                </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="w-full text-sm">
                    <thead>
                        <tr className="bg-gray-800 text-gray-400 text-left">
                            <th className="px-6 py-4 font-medium">#</th>
                            <th className="px-6 py-4 font-medium">Job Title</th>
                            <th className="px-6 py-4 font-medium">Type</th>
                            <th className="px-6 py-4 font-medium">Location</th>
                            <th className="px-6 py-4 font-medium">Deadline</th>
                            <th className="px-6 py-4 font-medium">Status</th>
                            <th className="px-6 py-4 font-medium">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobs.length === 0 ? (
                            <tr>
                                <td colSpan={7} className="text-center py-16 text-gray-500">
                                    No jobs found!
                                </td>
                            </tr>
                        ) : (
                            jobs.map((job, index) => (
                                <tr key={job._id} className="border-t border-gray-800 hover:bg-gray-800 transition">

                                    {/* # */}
                                    <td className="px-6 py-4 text-gray-400">{index + 1}</td>

                                    {/* Job Title */}
                                    <td className="px-6 py-4">
                                        <p className="text-white font-semibold">{job.jobTitle}</p>
                                        <p className="text-gray-500 text-xs mt-1">{job.category}</p>
                                    </td>

                                    {/* Type */}
                                    <td className="px-6 py-4">
                                        <span className="bg-blue-900 text-blue-400 text-xs px-3 py-1 rounded-full">
                                            {job.jobType}
                                        </span>
                                    </td>

                                    {/* Location */}
                                    <td className="px-6 py-4 text-gray-400">
                                        📍 {job.location}
                                    </td>

                                    {/* Deadline */}
                                    <td className="px-6 py-4 text-gray-400">
                                        {job.deadline}
                                    </td>

                                    {/* Status */}
                                    <td className="px-6 py-4">
                                        <span className={`text-xs px-3 py-1 rounded-full font-semibold
                                            ${job.status === 'active'
                                                ? 'bg-green-900 text-green-400'
                                                : 'bg-red-900 text-red-400'}`}>
                                            {job.status}
                                        </span>
                                    </td>

                                    {/* Actions */}
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <button className="p-2 bg-blue-900 hover:bg-blue-800 text-blue-400 rounded-xl transition cursor-pointer">
                                                <FiEdit size={16} />
                                            </button>
                                            <button className="p-2 bg-red-900 hover:bg-red-800 text-red-400 rounded-xl transition cursor-pointer">
                                                <RiDeleteBin6Line size={16} />
                                            </button>
                                        </div>
                                    </td>

                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default RecruiterJobs;