'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const JobApply = ({ applicant, job }) => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: applicant?.name || '',
        email: applicant?.email || '',
        phone: '',
        coverLetter: '',
        resume: null,
    });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({ type: '', text: '' });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'resume') {
            setFormData({ ...formData, resume: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage({ type: '', text: '' });

        if (!formData.phone) {
            setMessage({ type: 'error', text: 'Phone number is required' });
            setLoading(false);
            return;
        }
        if (!formData.coverLetter) {
            setMessage({ type: 'error', text: 'Cover letter is required' });
            setLoading(false);
            return;
        }
        if (!formData.resume) {
            setMessage({ type: 'error', text: 'Please upload your resume' });
            setLoading(false);
            return;

        }
        console.log(formData)

        const submitData = {
            jobId: job?._id,
            jobTitle: job?.jobTitle,
            companyName: job?.companyName,
            applicantId: applicant?.id,
            applicantName: applicant?.name,
            applicantEmail: applicant?.email,
            ...formData
        };

        try {
            console.log(submitData)
            const response = await fetch('http://localhost:5000/api/application', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(submitData)
            });
            const result = await response.json();

            if (response.ok) {
                setMessage({ type: 'success', text: 'Application submitted successfully!' });
                setTimeout(() => router.push('/jobs'), 2000);
            } else {
                setMessage({ type: 'error', text: result.message || 'Submission failed' });
            }
        } catch (error) {
            setMessage({ type: 'error', text: 'Network error. Please try again.' });
            console.log(error)
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="max-w-3xl mx-auto px-4 py-8">
            <Link href={`/jobs/${job._id}`} className="text-blue-600 hover:underline mb-4 inline-block">
                Back to Job Details
            </Link>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 md:p-8">
                <h1 className="text-2xl font-bold text-gray-800 mb-2">Apply for {job.jobTitle}</h1>
                <p className="text-gray-600 mb-6">{job.companyName} • {job.location}</p>

                {message.text && (
                    <div className={`mb-6 p-3 rounded-lg ${message.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                        {message.text}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full text-black px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full text-black px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full text-black px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Resume (PDF/DOC) *</label>
                        <input
                            type="file"
                            name="resume"
                            accept=".pdf,.doc,.docx"
                            onChange={handleChange}
                            required
                            className="w-full text-black px-3 py-2 border border-gray-300 rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                        />
                        <p className="text-xs text-gray-500 mt-1">Max 5MB. PDF, DOC, DOCX only.</p>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Cover Letter *</label>
                        <textarea
                            name="coverLetter"
                            rows="5"
                            value={formData.coverLetter}
                            onChange={handleChange}
                            required
                            placeholder="Why are you suitable for this position? ..."
                            className="w-full px-4 py-2 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-200 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        {loading ? 'Submitting...' : 'Submit Application'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default JobApply;