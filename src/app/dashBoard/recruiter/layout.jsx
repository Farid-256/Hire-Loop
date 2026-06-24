import { requireRole } from '@/lib/core/sesson';

const RecruiterLayout = async ({ children }) => {
    await requireRole('recruiter')
    return children
};

export default RecruiterLayout;