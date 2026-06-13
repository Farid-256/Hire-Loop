'use client'
import { creatJobs } from "@/lib/actions/jobs";
import { redirect } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

const NewJob = () => {
    const [loading, setLoading] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const formData = new FormData(e.currentTarget);
        const jobData = Object.fromEntries(formData.entries());
        
        jobData.status = 'active'
        jobData.companyId = 'company_123'


        setTimeout(() => {
            setLoading(false);
            e.target.reset();
        }, 1000);

        const res = await creatJobs(jobData)
        if(res.insertedId){
            toast.success('Job posted successfully!!')
            redirect('/dashBoard/recruiter')
        }
    };

    return (
        <div className="max-w-4xl mx-auto py-10 px-6">
            <h2 className="text-3xl font-bold text-white mb-2">Post a New Job</h2>
            <p className="text-gray-400 mb-8">Fill out the details to publish your job opening</p>

            <form onSubmit={onSubmit} className="bg-gray-900 rounded-3xl border border-gray-800 p-10 space-y-8">

                {/* Job Info */}
                <div>
                    <h3 className="text-lg font-semibold text-white border-b border-gray-700 pb-3 mb-6">Job Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Job Title */}
                        <div className="md:col-span-2">
                            <label className="text-gray-300 text-sm block mb-1">Job Title</label>
                            <input type="text" name="jobTitle" required placeholder="e.g. Senior Frontend Engineer"
                                className="w-full bg-gray-800 border border-gray-700 text-white p-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-cyan-500" />
                        </div>

                        {/* Category */}
                        <div>
                            <label className="text-gray-300 text-sm block mb-1">Category</label>
                            <select name="category" required
                                className="w-full bg-gray-800 border border-gray-700 text-white p-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-cyan-500">
                                <option value="">Select Category</option>
                                <option value="Engineering">Engineering</option>
                                <option value="Design">Design</option>
                                <option value="Marketing">Marketing</option>
                                <option value="Sales">Sales</option>
                                <option value="Product">Product</option>
                                <option value="Finance">Finance</option>
                                <option value="Others">Others</option>
                            </select>
                        </div>

                        {/* Job Type */}
                        <div>
                            <label className="text-gray-300 text-sm block mb-1">Job Type</label>
                            <select name="jobType" required
                                className="w-full bg-gray-800 border border-gray-700 text-white p-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-cyan-500">
                                <option value="">Select Type</option>
                                <option value="Full-time">Full-time</option>
                                <option value="Part-time">Part-time</option>
                                <option value="Remote">Remote</option>
                                <option value="Contract">Contract</option>
                                <option value="Internship">Internship</option>
                            </select>
                        </div>

                        {/* Salary Min */}
                        <div>
                            <label className="text-gray-300 text-sm block mb-1">Min Salary (BDT)</label>
                            <input type="number" name="salaryMin" required placeholder="e.g. 50000"
                                className="w-full bg-gray-800 border border-gray-700 text-white p-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-cyan-500" />
                        </div>

                        {/* Salary Max */}
                        <div>
                            <label className="text-gray-300 text-sm block mb-1">Max Salary (BDT)</label>
                            <input type="number" name="salaryMax" required placeholder="e.g. 80000"
                                className="w-full bg-gray-800 border border-gray-700 text-white p-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-cyan-500" />
                        </div>

                        {/* Location */}
                        <div>
                            <label className="text-gray-300 text-sm block mb-1">Location</label>
                            <input type="text" name="location" required placeholder="e.g. Dhaka"
                                className="w-full bg-gray-800 border border-gray-700 text-white p-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-cyan-500" />
                        </div>

                        {/* Deadline */}
                        <div>
                            <label className="text-gray-300 text-sm block mb-1">Application Deadline</label>
                            <input type="date" name="deadline" required
                                className="w-full bg-gray-800 border border-gray-700 text-white p-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-cyan-500" />
                        </div>

                    </div>
                </div>

                {/* Job Description */}
                <div>
                    <h3 className="text-lg font-semibold text-white border-b border-gray-700 pb-3 mb-6">Job Description</h3>
                    <div className="space-y-5">

                        <div>
                            <label className="text-gray-300 text-sm block mb-1">Responsibilities</label>
                            <textarea name="responsibilities" required rows={4}
                                placeholder="List the key responsibilities..."
                                className="w-full bg-gray-800 border border-gray-700 text-white p-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none" />
                        </div>

                    </div>
                </div>

                {/* Submit */}
                <button type="submit" disabled={loading}
                    className="w-full py-4 text-lg font-semibold rounded-2xl bg-cyan-600 hover:bg-cyan-700 text-white transition cursor-pointer disabled:opacity-50">
                    {loading ? "Posting..." : "Post Job Now"}
                </button>

            </form>
        </div>
    );
};

export default NewJob;