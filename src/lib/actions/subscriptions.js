'use server'

import { serverMutation } from "../core/server"



export const creatSubscribtion = async(subInfo)=>{
    return serverMutation('/api/subscriptions', subInfo)
}