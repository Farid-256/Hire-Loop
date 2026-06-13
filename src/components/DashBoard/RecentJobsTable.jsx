const RecentJobsTable = () => {

    const jobs = [
        { id: 1, title: "Frontend Developer", category: "Engineering", applicants: 24, status: "Active", deadline: "2025-07-30" },
        { id: 2, title: "UI/UX Designer", category: "Design", applicants: 18, status: "Active", deadline: "2025-08-15" },
        { id: 3, title: "Product Manager", category: "Product", applicants: 32, status: "Closed", deadline: "2025-06-20" },
        { id: 4, title: "Backend Engineer", category: "Engineering", applicants: 41, status: "Active", deadline: "2025-09-01" },
        { id: 5, title: "Marketing Lead", category: "Marketing", applicants: 12, status: "Closed", deadline: "2025-05-10" },
    ];

    return (
        <div className="m-10 bg-gray-900 rounded-3xl border border-gray-800 overflow-hidden">

            <div className="p-6 border-b border-gray-800">
                <h3 className="text-xl font-bold text-white">Recent Job Posts</h3>
                <p className="text-gray-400 text-sm mt-1">Overview of your latest job listings</p>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-sm">
                    <thead>
                        <tr className="bg-gray-800 text-gray-400 text-left">
                            <th className="px-6 py-4 font-medium">#</th>
                            <th className="px-6 py-4 font-medium">Job Title</th>
                            <th className="px-6 py-4 font-medium">Category</th>
                            <th className="px-6 py-4 font-medium">Applicants</th>
                            <th className="px-6 py-4 font-medium">Deadline</th>
                            <th className="px-6 py-4 font-medium">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobs.map((job, index) => (
                            <tr key={job.id} className="border-t border-gray-800 hover:bg-gray-800 transition">
                                <td className="px-6 py-4 text-gray-400">{index + 1}</td>
                                <td className="px-6 py-4 text-white font-medium">{job.title}</td>
                                <td className="px-6 py-4 text-gray-400">{job.category}</td>
                                <td className="px-6 py-4 text-cyan-400 font-semibold">{job.applicants}</td>
                                <td className="px-6 py-4 text-gray-400">{job.deadline}</td>
                                <td className="px-6 py-4">
                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold
                                        ${job.status === 'Active'
                                            ? 'bg-green-900 text-green-400'
                                            : 'bg-red-900 text-red-400'}`}>
                                        {job.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default RecentJobsTable;