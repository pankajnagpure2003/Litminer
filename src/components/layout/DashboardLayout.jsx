import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import BottomNav from './BottomNav';
import { GlobalLoadingSpinner } from '../ui/LoadingSpinner';

export default function DashboardLayout({ title = 'Dashboard', subtitle }) {
  return (
    <div className="flex min-h-screen bg-[#09090B]">
      {/* Desktop Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 md:ml-64 pb-24 md:pb-0 relative overflow-hidden">
        {/* Subtle background gradient blobs */}
        <div className="fixed top-0 right-0 w-[600px] h-[600px] bg-[#4f46e5]/5 rounded-full blur-[120px] pointer-events-none -z-0" />
        <div className="fixed bottom-0 left-64 w-[400px] h-[400px] bg-[#4cd7f6]/3 rounded-full blur-[100px] pointer-events-none -z-0" />

        <TopBar title={title} subtitle={subtitle} />

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="relative z-10"
        >
          <Suspense fallback={<GlobalLoadingSpinner />}>
            <Outlet />
          </Suspense>
        </motion.div>
      </main>

      {/* Mobile Bottom Navigation */}
      <BottomNav />
    </div>
  );
}
