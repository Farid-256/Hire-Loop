// components/JobTypeDropdown.jsx
'use client';

const jobTypes = ['All', 'Full-time', 'Part-time', 'Contract', 'Remote', 'Internship'];

const JobTypeDropdown = ({ selectedType, onTypeChange }) => {
    return (
        <select
            value={selectedType}
            onChange={(e) => onTypeChange(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-black"
        >
            {jobTypes.map((type) => (
                <option key={type} value={type}>
                    {type}
                </option>
            ))}
        </select>
    );
};

export default JobTypeDropdown;