import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import DashboardLayout from '../components/layout/DashboardLayout';
import { GlobalLoadingSpinner } from '../components/ui/LoadingSpinner';

// Lazy-loaded public pages
const LandingPage = lazy(() => import('../pages/LandingPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const ForgotPasswordPage = lazy(() => import('../pages/ForgotPasswordPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

// Lazy-loaded dashboard pages
const DashboardHome = lazy(() => import('../pages/dashboard/DashboardHome'));
const MiningPage = lazy(() => import('../pages/dashboard/MiningPage'));
const WalletPage = lazy(() => import('../pages/dashboard/WalletPage'));
const ReferralsPage = lazy(() => import('../pages/dashboard/ReferralsPage'));
const RewardsPage = lazy(() => import('../pages/dashboard/RewardsPage'));
const TasksPage = lazy(() => import('../pages/dashboard/TasksPage'));
const TransactionsPage = lazy(() => import('../pages/dashboard/TransactionsPage'));
const ProfilePage = lazy(() => import('../pages/dashboard/ProfilePage'));
const SettingsPage = lazy(() => import('../pages/dashboard/SettingsPage'));

// Admin stub pages (inline, no separate files needed)
const AdminStub = ({ title }) => (
  <div className="flex flex-col items-center justify-center h-full py-24 text-center">
    <span className="material-symbols-outlined text-[#c3c0ff] text-6xl mb-4">admin_panel_settings</span>
    <h2 className="font-[Sora] text-2xl font-bold text-[#e5e1e4] mb-2">{title}</h2>
    <p className="text-[#c7c4d8] font-[Inter]">This admin module is coming soon.</p>
  </div>
);

export default function AppRouter() {
  return (
    <Suspense fallback={<GlobalLoadingSpinner />}>
      <Routes>
        {/* ─── Public Routes ─────────────────────────────── */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />

        {/* ─── Dashboard Routes (Protected) ──────────────── */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout title="User Dashboard" subtitle="Network: Optimal" />
            </ProtectedRoute>
          }
        >
          <Route index element={<DashboardHome />} />
          <Route path="mining" element={<MiningPage />} />
          <Route path="wallet" element={<WalletPage />} />
          <Route path="referrals" element={<ReferralsPage />} />
          <Route path="rewards" element={<RewardsPage />} />
          <Route path="tasks" element={<TasksPage />} />
          <Route path="transactions" element={<TransactionsPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>

        {/* ─── Admin Routes (Protected) ──────────────────── */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <DashboardLayout title="Admin Panel" />
            </ProtectedRoute>
          }
        >
          <Route index element={<AdminStub title="Admin Dashboard" />} />
          <Route path="users" element={<AdminStub title="User Management" />} />
          <Route path="mining" element={<AdminStub title="Mining Administration" />} />
          <Route path="rewards" element={<AdminStub title="Rewards Administration" />} />
          <Route path="tasks" element={<AdminStub title="Task Management" />} />
          <Route path="transactions" element={<AdminStub title="Transaction Administration" />} />
          <Route path="referrals" element={<AdminStub title="Referral Administration" />} />
          <Route path="settings" element={<AdminStub title="System Settings" />} />
        </Route>

        {/* ─── 404 ───────────────────────────────────────── */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}
