import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/Signup";
import Home from "./pages/home";
import JobSeeker from "./pages/jobseeker";
import ManageProfile from "./pages/ManageProfile";
import RecruiterDashboard from "./pages/RecruiterDashboard";
import AdminDashboard from "./pages/admin"; 
import ContactUs from "./pages/contactus";
import Applications from "./pages/Applications";
import AppliedJobs from "./pages/AppliedJobs";
import AccountSettings from "./pages/AccountSettings";
import EmployersPage from "./pages/EmployersPage";
import CandidatesPage from "./pages/CandidatesPage";
import JobListingsPage from "./pages/JoblistingsPage";
import InterviewsPage from "./pages/InterviewsPage";
import ReportsPage from "./pages/ReportsPage";
import ShortlistingPage from "./pages/ShortlistingsPage";
import NotificationsPage from "./pages/NotificationsPage";
import AdminSettingsPage from "./pages/AdminSettingsPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
         <Route path="/contactus" element={<ContactUs />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/jobseeker" element={<JobSeeker />} />
        <Route path="/manage-profile" element={<ManageProfile />} />
        <Route path="/recruiter" element={<RecruiterDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} /> 
        <Route path="/applications" element={<Applications />} />
        <Route path="/AppliedJobs" element={<AppliedJobs />} />
        <Route path="/employers" element={<EmployersPage />} />
         <Route path="/candidates" element={<CandidatesPage /> }/>
        <Route path="/AccountSettings" element={<AccountSettings />} />
        <Route path="/job-listings" element={<JobListingsPage />} />
        {/* <Route path="/applications" element={<ApplicationsPage />} /> */}
        <Route path="/shortlisting" element={<ShortlistingPage />} />
        <Route path="/interviews" element={<InterviewsPage />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/notifications" element={<NotificationsPage />} />
        <Route path="/admin-settings" element={<AdminSettingsPage />} />
    
      </Routes>
    </Router>
  );
};

export default App;
