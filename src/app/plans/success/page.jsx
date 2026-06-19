// app/plans/success/page.jsx
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { stripe } from '@/lib/stripe';
import { getUserSesson } from '@/lib/core/sesson';


const SuccessPage = async ({ searchParams }) => {
    const { session_id } = await searchParams;

  
    if (!session_id) {
        redirect('/plans');
    }


    const user = await getUserSesson();
    if (!user) {
        redirect('/auth/login');
    }


    let session;
    try {
        session = await stripe.checkout.sessions.retrieve(session_id, {
            expand: ['line_items', 'customer'],
        });
    } catch (err) {
        console.error('Stripe session fetch error:', err);
        return (
            <div className="max-w-md mx-auto text-center py-16 px-4">
                <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                    <h2 className="text-2xl font-bold text-red-700 mb-2">Something went wrong</h2>
                    <p className="text-red-600">Could not verify your payment. Please contact support.</p>
                    <Link href="/plans" className="inline-block mt-4 text-blue-600 hover:underline">
                        ← Back to Plans
                    </Link>
                </div>
            </div>
        );
    }


    const planName = session.metadata?.planName || 'Premium Plan';
    const amount = session.amount_total ? (session.amount_total / 100).toFixed(2) : null;
    const currency = session.currency?.toUpperCase() || 'USD';

    return (
        <div className="min-h-[70vh] flex items-center justify-center px-4 py-12">
            <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl border border-green-100 p-8 text-center">
   
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                </div>

                <h1 className="text-3xl font-bold text-gray-800 mb-2">Payment Successful! 🎉</h1>
                <p className="text-gray-600 mb-6">
                    Your <span className="font-semibold text-blue-600">{planName}</span> subscription is now active.
                </p>

    
                <div className="bg-gray-50 rounded-xl p-4 mb-6 text-left text-sm">
                    <div className="grid grid-cols-2 gap-2">
                        <span className="text-gray-500">Plan</span>
                        <span className="font-medium text-gray-800 text-right">{planName}</span>

                        {amount && (
                            <>
                                <span className="text-gray-500">Amount</span>
                                <span className="font-medium text-gray-800 text-right">
                                    {currency} {amount}
                                </span>
                            </>
                        )}

                        <span className="text-gray-500">Status</span>
                        <span className="font-medium text-green-600 text-right">Active</span>

                        <span className="text-gray-500">Email</span>
                        <span className="font-medium text-gray-800 text-right">{session.customer?.email || user.email}</span>

                        <span className="text-gray-500">Transaction ID</span>
                        <span className="font-medium text-gray-800 text-right text-xs truncate">
                            {session.id}
                        </span>
                    </div>
                </div>

   
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                   
                    <Link href="/jobs" className="bg-gray-200 hover:bg-gray-300
                    text-gray-800 font-semibold py-2.5 px-6 rounded-lg transition">
                        Browse Jobs
                    </Link>
                </div>

                <p className="text-xs text-gray-400 mt-8">
                    If you have any questions, please contact our support team.
                </p>
            </div>
        </div>
    );
};

export default SuccessPage