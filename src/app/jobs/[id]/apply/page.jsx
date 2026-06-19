import { getJobById } from '@/lib/api/jobs';
import { getUserSesson } from '@/lib/core/sesson';
import { redirect } from 'next/navigation';
import JobApply from './jobApply';
import { getApplicationsByAplicant } from '@/lib/api/application';
import Link from 'next/link';

const ApplyPage = async ({ params }) => {
    const { id } = await params;
    const user = await getUserSesson();

    if (!user) {
        redirect(`/auth/login?redirect=/jobs/${id}/apply`);
    }

    if (user.role !== 'seeker') {
        return (
            <div className="text-center py-10">
                <h3 className="text-red-600">You are not a Job Seeker</h3>
            </div>
        );
    }

    const applications = await getApplicationsByAplicant(user.id);
    const plan = {
        name: 'Free',
        maxApplicationsPerMonth: 3,
    };

    const job = await getJobById(id);

    if (!job) {
        return <div className="text-center py-10">Job not found</div>;
    }

    return (
        <div className='flex flex-col justify-center items-center'>
            <h3>
                You have applied so far: {applications.length} out of {plan.maxApplicationsPerMonth} this month
            </h3>
            <h2>
                Purchase plan to apply for more positions{' '}
                <Link className="text-blue-800 font-bold" href="/plans">
                    Our Plans
                </Link>
            </h2>
            {applications.length < plan.maxApplicationsPerMonth && <JobApply applicant={user} job={job} />}
        </div>
    );
};

export default ApplyPage;