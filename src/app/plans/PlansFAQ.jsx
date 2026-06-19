// app/plans/PlansFAQ.jsx
'use client';

import { useState } from 'react';

const faqs = [
    {
        q: 'Can I cancel my plan anytime?',
        a: 'Yes, you can cancel your subscription at any time from your account settings. You will not be charged for the next billing cycle.',
    },
    {
        q: 'What is your refund policy?',
        a: 'We offer a 14-day money-back guarantee for all paid plans. Contact our support team to request a refund.',
    },
    {
        q: 'What payment methods do you accept?',
        a: 'We accept all major credit cards (Visa, Mastercard, American Express) and PayPal.',
    },
    {
        q: 'Can I switch between plans?',
        a: 'Absolutely! You can upgrade or downgrade your plan at any time. Changes will take effect immediately and you’ll be prorated for the current month.',
    },
];

const PlansFAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
                <div key={idx} className="border border-gray-200 rounded-lg bg-white overflow-hidden">
                    <button
                        onClick={() => toggle(idx)}
                        className="w-full flex justify-between items-center p-4 text-left text-gray-800 font-medium hover:bg-gray-50 transition"
                    >
                        <span>{faq.q}</span>
                        <span className="text-xl text-blue-600">
                            {openIndex === idx ? '−' : '+'}
                        </span>
                    </button>
                    {openIndex === idx && (
                        <div className="px-4 pb-4 text-gray-600 text-sm">
                            {faq.a}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default PlansFAQ;