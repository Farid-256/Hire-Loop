// app/jobs/page.jsx
'use client';

import { useState, useEffect } from 'react';
import JobCard from '@/components/JobCard';
import SearchJob from '@/components/SearchJob';
import JobTypeDropdown from '@/components/JobTypeDropdown';
import CategoryDropdown from '@/components/CategoryDropdown';
import { getJobs } from '@/lib/api/jobs';

export default function JobsPage() {
    const [allJobs, setAllJobs] = useState([]);
    const [filteredJobs, setFilteredJobs] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedType, setSelectedType] = useState('All');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const jobs = await getJobs();
                setAllJobs(Array.isArray(jobs) ? jobs : []);
            } catch (error) {
                console.error('Error loading jobs:', error);
                setAllJobs([]);
            } finally {
                setLoading(false);
            }
        };
        fetchJobs();
    }, []);

    useEffect(() => {
        let result = [...allJobs];

        if (searchTerm) {
            result = result.filter((job) => {
                const title = (job.jobTitle || '').toLowerCase();
                const location = (job.location || '').toLowerCase();
                const term = searchTerm.toLowerCase();
                return title.includes(term) || location.includes(term);
            });
        }

        if (selectedType !== 'All') {
            result = result.filter((job) => (job.jobType || '') === selectedType);
        }

        if (selectedCategory !== 'All') {
            result = result.filter((job) => (job.category || '') === selectedCategory);
        }

        setFilteredJobs(result);
    }, [searchTerm, selectedType, selectedCategory, allJobs]);

    if (loading) {
        return <div className="text-center py-10">Loading jobs...</div>;
    }

    return (
        <div className="container mx-auto px-4 py-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <SearchJob searchTerm={searchTerm} onSearchChange={setSearchTerm} />
                <JobTypeDropdown selectedType={selectedType} onTypeChange={setSelectedType} />
                <CategoryDropdown selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
            </div>

            <div className="mb-4">
                <h3 className="text-lg font-semibold">Found {filteredJobs.length} jobs</h3>
            </div>

            {filteredJobs.length === 0 ? (
                <p className="text-gray-500 text-center py-10">No jobs match your filters.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredJobs.map((job) => (
                        <JobCard key={job._id} job={job} />
                    ))}
                </div>
            )}
        </div>
    );
}