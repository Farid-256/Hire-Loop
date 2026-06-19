// app/plans/page.jsx
import Link from 'next/link';
import PlansFAQ from './PlansFAQ';

const PlansPage = () => {
    const seekerPlans = [
        {
            name: 'Free',
            id: 'seeker_free',
            price: '$0/forever',
            features: [
                'Browse & save up to 10 jobs',
                'Apply to up to 3 jobs per month',
                'Basic profile',
                'Email alerts',
            ],
        },
        {
            name: 'Pro',
            id: 'seeker_pro',
            price: '$19/month',
            features: [
                'Apply to up to 30 jobs per month',
                'Unlimited saved jobs',
                'Application tracking',
                'Salary insights',
            ],
        },
        {
            name: 'Premium',
            id: 'seeker_premium',
            price: '$39/month',
            features: [
                'Everything in Pro',
                'Unlimited applications',
                'Profile boost to recruiters',
                'Early access to new jobs',
                'Priority support',
            ],
        },
    ];

    const recruiterPlans = [
        {
            name: 'Free',
            id: 'recruiter_free',
            price: '$0/forever',
            features: [
                'Up to 3 active job posts',
                'Basic applicant management',
                'Standard listing visibility',
                'Great for a company\'s first year of hiring',
            ],
        },
        {
            name: 'Growth',
            id: 'recruiter_growth',
            price: '$49/month',
            features: [
                'Up to 10 active job posts',
                'Applicant tracking',
                'Basic analytics',
                'Email support',
            ],
        },
        {
            name: 'Enterprise',
            id: 'recruiter_enterprise',
            price: '$149/month',
            features: [
                'Up to 50 active job posts',
                'Advanced analytics dashboard',
                'Featured job listings',
                'Team collaboration',
                'Custom branding',
                'Priority support',
            ],
        },
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold text-center text-gray-300 mb-4">Choose Your Plan</h1>
            <p className="text-center text-gray-300 mb-12 text-lg">
                Find the perfect plan for your career or hiring needs
            </p>

            {/* For Job Seekers */}
            <h2 className="text-2xl font-semibold text-blue-700 mb-6 border-b pb-2">For Job Seekers</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                {seekerPlans.map((plan, idx) => (
                    <div key={idx} className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition">
                        <h3 className="text-xl font-bold text-gray-800">{plan.name}</h3>
                        <p className="text-3xl font-bold text-blue-600 my-3">{plan.price}</p>
                        <ul className="space-y-2 text-gray-700 text-sm">
                            {plan.features.map((feature, i) => (
                                <li key={i} className="flex items-start">
                                    <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <form action="/api/checkout_sessions" method="POST">
                            <input type="hidden" name="plan_id" value={plan.id} />
                            <section>
                                <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700
                                text-white font-semibold py-2 px-4 rounded-lg transition" type="submit" role="link">
                                    Checkout
                                </button>
                            </section>
                        </form>
                    </div>
                ))}
            </div>

            {/* For Recruiters */}
            <h2 className="text-2xl font-semibold text-blue-700 mb-6 border-b pb-2">For Recruiters</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                {recruiterPlans.map((plan, idx) => (
                    <div key={idx} className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition">
                        <h3 className="text-xl font-bold text-gray-800">{plan.name}</h3>
                        <p className="text-3xl font-bold text-blue-600 my-3">{plan.price}</p>
                        <ul className="space-y-2 text-gray-700 text-sm">
                            {plan.features.map((feature, i) => (
                                <li key={i} className="flex items-start">
                                    <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    {feature}
                                </li>
                            ))}
                        </ul>


                        <form action="/api/checkout_sessions" method="POST">
                            <input type="hidden" name="plan_id" value={plan.id} />
                            <section>
                                <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700
                                text-white font-semibold py-2 px-4 rounded-lg transition" type="submit" role="link">
                                    Checkout
                                </button>
                            </section>
                        </form>

                    </div>
                ))}
            </div>

            {/* FAQ Section */}
            <div className="bg-gray-50 rounded-2xl p-8 mt-8">
                <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">Frequently Asked Questions</h2>
                <PlansFAQ />
            </div>

            <div className="text-center mt-8">
                <Link href="/jobs" className="text-blue-600 hover:underline">
                    ← Back to Jobs
                </Link>
            </div>
        </div>
    );
};

export default PlansPage;