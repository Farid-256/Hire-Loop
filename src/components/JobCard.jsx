'use client'

import Link from "next/link";

const JobCard = ({ job }) => {
    if (!job) return null;

    const salaryRange = `${job.salaryMin} - ${job.salaryMax} Taka`;

    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
            <div className="p-5">

                <p className="text-sm text-blue-600 font-medium mb-1">{job.companyName}</p>


                <h2 className="text-xl font-bold text-gray-800 mb-2">{job.jobTitle}</h2>


                <div className="flex items-center text-gray-600 text-sm mb-1">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{job.location}</span>
                </div>


                <div className="flex items-center text-gray-600 text-sm mb-3">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2zM4 12c0 1.657 1.343 3 3 3h10c1.657 0 3-1.343 3-3s-1.343-3-3-3H7c-1.657 0-3 1.343-3 3z" />
                    </svg>
                    <span>{salaryRange}</span>
                </div>


                <p className="text-gray-700 text-sm mb-4 line-clamp-2">
                    {job.responsibilities}
                </p>


                <Link
                    href={`/jobs/${job._id}`}   // ← MongoDB এর _id ব্যবহার করুন
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 inline-block text-center"
                >
                    Apply Now
                </Link>
            </div>
        </div>
    );
};

export default JobCard;