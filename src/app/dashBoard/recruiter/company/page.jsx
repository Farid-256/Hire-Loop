'use client'

const RecruiterCompany = () => {
    return (
        <div className="max-w-4xl mx-auto p-8">
            <div className="shadow-lg rounded-2xl p-8">

                <h2 className="text-3xl font-bold mb-8 text-center">
                    Company Profile
                </h2>

                <form className="space-y-6">

                    {/* Company Name */}
                    <div>
                        <label className="block mb-2 font-medium">
                            Company Name
                        </label>
                        <input
                            type="text"
                            name="companyName"
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
                            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
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

                    {/* Company Logo */}
                    <div>
                        <label className="block mb-2 font-medium">
                            Company Logo
                        </label>
                        <input
                            type="file"
                            name="logo"
                            accept="image/*"
                            className="w-full border rounded-lg px-4 py-3"
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block mb-2 font-medium">
                            Company Description
                        </label>
                        <textarea
                            name="description"
                            rows="5"
                            placeholder="Tell us about your company..."
                            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
                    >
                        Save Company Profile
                    </button>

                </form>

            </div>
        </div>
    );
};

export default RecruiterCompany;