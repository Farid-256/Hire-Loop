import { requireRole } from '@/lib/core/sesson';
import React from 'react';

const SeekerLayout = async ({ children }) => {
    await requireRole('seeker')
    return children
};

export default SeekerLayout