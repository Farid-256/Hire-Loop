import { requireRole } from '@/lib/core/sesson';

const AdminDashBoardLayout = async ({ children }) => {
    await requireRole('admin')
    return children
};

export default AdminDashBoardLayout;