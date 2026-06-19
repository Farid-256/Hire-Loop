'use client'

import { creatCompany } from "@/lib/actions/company";
import { useState } from "react";
import { toast } from "react-toastify";

const CompanyProfile = ({ recruiter, recruiterCompany }) => {
    console.log(recruiterCompany)
    const [loading, setLoading] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.currentTarget);
        const companyData = Object.fromEntries(formData.entries());

        companyData.recruiterId = recruiter?.id;

        const res = await creatCompany(companyData);

        if (res?.insertedId) {
            toast.success("Company profile saved!");
        }

        setLoading(false);
    };

    return (
        <div className="max-w-4xl mx-auto p-8">
            <div className="shadow-lg rounded-2xl p-8">

                {recruiterCompany && (
                    <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
                        Company profile already exists. You can edit the information below.
                    </div>
                )}

                <h2 className="text-3xl font-bold mb-8 text-center">
                    Company Profile
                </h2>

                <form onSubmit={onSubmit} className="space-y-6">

                    {/* Company Name */}
                    <div>
                        <label className="block mb-2 font-medium">
                            Company Name
                        </label>
                        <input
                            type="text"
                            name="companyName"
                            defaultValue={recruiterCompany?.companyName || ""}
                            placeholder="Enter company name"
                            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Category */}
                    <div>
                        <label className="block mb-2 font-medium">
                            Category
                        </label>
                        <select
                            name="category"
                            defaultValue={recruiterCompany?.category || ""}
                            className="w-full bg-black border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">Select Category</option>
                            <option value="Technology">Technology</option>
                            <option value="Software">Software</option>
                            <option value="Marketing">Marketing</option>
                            <option value="Finance">Finance</option>
                            <option value="Healthcare">Healthcare</option>
                            <option value="Education">Education</option>
                        </select>
                    </div>

                    {/* Website */}
                    <div>
                        <label className="block mb-2 font-medium">
                            Website URL
                        </label>
                        <input
                            type="url"
                            name="website"
                            defaultValue={recruiterCompany?.website || ""}
                            placeholder="https://company.com"
                            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Location */}
                    <div>
                        <label className="block mb-2 font-medium">
                            Location
                        </label>
                        <input
                            type="text"
                            name="location"
                            defaultValue={recruiterCompany?.location || ""}
                            placeholder="Dhaka, Bangladesh"
                            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Employee Range */}
                    <div>
                        <label className="block mb-2 font-medium">
                            Employee Count Range
                        </label>
                        <select
                            name="employeeRange"
                            defaultValue={recruiterCompany?.employeeRange || ""}
                            className="w-full border bg-black rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">Select Range</option>
                            <option value="1-10">1 - 10</option>
                            <option value="10-20">10 - 20</option>
                            <option value="20-50">20 - 50</option>
                            <option value="50-100">50 - 100</option>
                            <option value="100-500">100 - 500</option>
                            <option value="500+">500+</option>
                        </select>
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block mb-2 font-medium">
                            Company Description
                        </label>
                        <textarea
                            name="description"
                            rows="5"
                            defaultValue={recruiterCompany?.description || ""}
                            placeholder="Tell us about your company..."
                            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition disabled:opacity-50"
                    >
                        {loading
                            ? "Saving..."
                            : recruiterCompany
                                ? "Update Company Profile"
                                : "Save Company Profile"}
                    </button>

                </form>

            </div>
        </div>
    );
};

export default CompanyProfile;