'use client';

import { creatCompany } from "@/lib/actions/company";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const CompanyProfile = ({ recruiter, recruiterCompany }) => {
    const [loading, setLoading] = useState(false);
    const [company, setCompany] = useState(recruiterCompany);
    const [isClient, setIsClient] = useState(false);

    // শুধু ক্লায়েন্টে রেন্ডার করার জন্য
    useEffect(() => {
        setIsClient(true);
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.currentTarget);
        const companyData = Object.fromEntries(formData.entries());

        companyData.recruiterId = recruiter?.id;
        companyData.status = company && company.status ? company.status : 'pending';

        const res = await creatCompany(companyData);

        if (res?.insertedId) {
            const savedCompany = { ...companyData, _id: res.insertedId };
            setCompany(savedCompany);
            toast.success("Company profile saved!");
        }

        setLoading(false);
    };

    // স্ট্যাটাস ব্যাজের রঙ নির্ধারণ
    const getStatusColor = (status) => {
        switch (status) {
            case 'approved':
                return 'bg-green-600 text-white';
            case 'rejected':
                return 'bg-red-600 text-white';
            default:
                return 'bg-yellow-500 text-white';
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-8">
            <div className="shadow-lg rounded-2xl p-8">
                <div className="flex items-center justify-center">
                    <h2 className="text-3xl font-bold mb-8 text-center">Company Profile</h2>

                    {/* স্ট্যাটাস ব্যাজ - শুধু ক্লায়েন্টে দেখানো হচ্ছে */}
                    {isClient && company && (
                        <div
                            className="bg-green-600 text-green-700 rounded-lg flex flex-col sm:flex-row justify-between sm:items-center gap-2"
                            suppressHydrationWarning>
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${getStatusColor(company.status)}`}>
                                {company.status === 'approved' ? '✅ Approved' :
                                    company.status === 'rejected' ? '❌ Rejected' :
                                        '⏳ Pending'}
                            </span>
                        </div>
                    )}
                </div>

                <form onSubmit={onSubmit} className="space-y-6">
                    <div>
                        <label className="block mb-2 font-medium">Company Name</label>
                        <input
                            type="text"
                            name="companyName"
                            defaultValue={company?.companyName || ""}
                            placeholder="Enter company name"
                            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 font-medium">Category</label>
                        <select
                            name="category"
                            defaultValue={company?.category || ""}
                            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
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

                    <div>
                        <label className="block mb-2 font-medium">Website URL</label>
                        <input
                            type="url"
                            name="website"
                            defaultValue={company?.website || ""}
                            placeholder="https://company.com"
                            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 font-medium">Location</label>
                        <input
                            type="text"
                            name="location"
                            defaultValue={company?.location || ""}
                            placeholder="Dhaka, Bangladesh"
                            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 font-medium">Employee Count Range</label>
                        <select
                            name="employeeRange"
                            defaultValue={company?.employeeRange || ""}
                            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
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

                    <div>
                        <label className="block mb-2 font-medium">Company Description</label>
                        <textarea
                            name="description"
                            rows="5"
                            defaultValue={company?.description || ""}
                            placeholder="Tell us about your company..."
                            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition disabled:opacity-50"
                    >
                        {loading ? "Saving..." : company ? "Update Company Profile" : "Save Company Profile"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CompanyProfile;