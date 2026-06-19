// app/jobs/[id]/page.jsx
import { getJobById } from '@/lib/api/jobs';
import Link from 'next/link';
import { notFound } from 'next/navigation';


const JobDetailsPage = async ({ params }) => {
    const { id } = await params;
    const job = await getJobById(id);

   
    if (!job) {
        notFound();
    }

 
    const salaryRange = `${job.salaryMin} - ${job.salaryMax} Taka`;
    const deadlineDate = new Date(job.deadline).toLocaleDateString('en-BD', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
    const postedDate = new Date(job.createAt).toLocaleDateString('en-BD', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
        
            <Link href="/jobs" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
                <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Jobs
            </Link>

      
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
             
                <div className="bg-blue-700 px-6 py-8 text-white">
                    <h1 className="text-3xl md:text-4xl font-bold mb-2">{job.jobTitle}</h1>
                    <p className="text-xl text-blue-100">{job.companyName}</p>
                </div>

         
                <div className="p-6 md:p-8">
                
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="flex items-start space-x-3">
                            <svg className="w-6 h-6 text-blue-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <div>
                                <p className="text-sm text-gray-500">Location</p>
                                <p className="font-medium text-gray-900">{job.location}</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-3">
                            <svg className="w-6 h-6 text-blue-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2zM4 12c0 1.657 1.343 3 3 3h10c1.657 0 3-1.343 3-3s-1.343-3-3-3H7c-1.657 0-3 1.343-3 3z" />
                            </svg>
                            <div>
                                <p className="text-sm text-gray-500">Salary</p>
                                <p className="font-medium text-gray-900">{salaryRange}</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-3">
                            <svg className="w-6 h-6 text-blue-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <div>
                                <p className="text-sm text-gray-500">Job Type</p>
                                <p className="font-medium text-gray-900">{job.jobType}</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-3">
                            <svg className="w-6 h-6 text-blue-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                            </svg>
                            <div>
                                <p className="text-sm text-gray-500">Category</p>
                                <p className="font-medium text-gray-900">{job.category}</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-3">
                            <svg className="w-6 h-6 text-blue-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <div>
                                <p className="text-sm text-gray-500">Application Deadline</p>
                                <p className="font-medium text-red-600">{deadlineDate}</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-3">
                            <svg className="w-6 h-6 text-blue-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <div>
                                <p className="text-sm text-gray-500">Posted on</p>
                                <p className="font-medium text-gray-900">{postedDate}</p>
                            </div>
                        </div>
                    </div>


                    <div className="border-t border-gray-200 pt-6 mb-6">
                        <h2 className="text-xl font-semibold text-gray-800 mb-3">Job Responsibilities</h2>
                        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                            {job.responsibilities}
                        </p>
                    </div>


                    <div className="flex justify-center mt-8">
                        <Link href={`/jobs/${job._id}/apply`}
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg inline-flex items-center">
                            Apply Now
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetailsPage;