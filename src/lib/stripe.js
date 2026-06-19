import 'server-only'

import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export const PLAN_PRICE_ID = {
    'seeker_pro' : 'price_1Tivz8Pa3WtA61jwU4XXfZ8f',

    'seeker_premium' : 'price_1TjsTCPa3WtA61jwAqQStorg',

    'recruiter_growth' : 'price_1TjsUFPa3WtA61jwdzf6qYbg',

    'recruiter_enterprise' : 'price_1TjsV9Pa3WtA61jw9AIo6n1n'
    
}