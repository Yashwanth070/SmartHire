import { Navigate, Route, Routes } from "react-router-dom";

import AuthLayout from "../layouts/AuthLayout";
import DashboardLayout from "../layouts/DashboardLayout";

import Login from "../pages/Login";
import Register from "../pages/Register";

import BrowseJobs from "../pages/BrowseJobs";
import CandidateDashboard from "../pages/CandidateDashboard";
import Legal from "../pages/Legal";
import ManageJobs from "../pages/ManageJobs";
import MyApplications from "../pages/MyApplications";
import PostJob from "../pages/PostJob";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import Profile from "../pages/Profile";
import RecruiterDashboard from "../pages/RecruiterDashboard";
import SalesPolicy from "../pages/SalesPolicy";
import SettingsCustomize from "../pages/SettingsCustomize";
import SettingsNotifications from "../pages/SettingsNotifications";
import SettingsSecurity from "../pages/SettingsSecurity";
import SiteMap from "../pages/SiteMap";
import TermsOfUse from "../pages/TermsOfUse";
import ViewApplicants from "../pages/ViewApplicants";

import NotFound from "../pages/NotFound";
import ProtectedRoute from "./ProtectedRoute";
import RoleRoute from "./RoleRoute";

export default function AppRoutes() {
  return (
    <Routes>
      {/* ================= AUTH ROUTES ================= */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      {/* ================= DASHBOARD ROUTES ================= */}
      <Route
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        {/* Common Routes (Both roles) */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings/security" element={<SettingsSecurity />} />
        <Route path="/settings/customize" element={<SettingsCustomize />} />
        <Route path="/settings/notifications" element={<SettingsNotifications />} />

        {/* Legal Pages */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfUse />} />
        <Route path="/sales-policy" element={<SalesPolicy />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/sitemap" element={<SiteMap />} />

        {/* Recruiter Routes */}
        <Route
          path="/recruiter"
          element={
            <RoleRoute role="RECRUITER">
              <RecruiterDashboard />
            </RoleRoute>
          }
        />

        <Route
          path="/recruiter/post-job"
          element={
            <RoleRoute role="RECRUITER">
              <PostJob />
            </RoleRoute>
          }
        />

        <Route
          path="/recruiter/manage-jobs"
          element={
            <RoleRoute role="RECRUITER">
              <ManageJobs />
            </RoleRoute>
          }
        />

        <Route
          path="/view-applicants"
          element={
            <RoleRoute role="RECRUITER">
              <ViewApplicants />
            </RoleRoute>
          }
        />

        {/* Candidate Routes */}
        <Route
          path="/candidate"
          element={
            <RoleRoute role="CANDIDATE">
              <CandidateDashboard />
            </RoleRoute>
          }
        />

        <Route
          path="/candidate/applications"
          element={
            <RoleRoute role="CANDIDATE">
              <MyApplications />
            </RoleRoute>
          }
        />

        <Route
          path="/browse-jobs"
          element={
            <RoleRoute role="CANDIDATE">
              <BrowseJobs />
            </RoleRoute>
          }
        />
      </Route>

      {/* ================= DEFAULT ================= */}
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}