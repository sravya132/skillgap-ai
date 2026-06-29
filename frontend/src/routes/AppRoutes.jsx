import { Routes, Route } from "react-router-dom";

import Landing from "../pages/Landing";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ForgotPassword from "../pages/auth/ForgotPassword";

import Dashboard from "../pages/dashboard/Dashboard";

import UploadResume from "../pages/resume/UploadResume";
import ResumeAnalysis from "../pages/resume/ResumeAnalysis";
import SkillGap from "../pages/resume/SkillGap";

import InterviewQuestions from "../pages/ai/InterviewQuestions";
import LearningRoadmap from "../pages/ai/LearningRoadmap";
import ResumeSuggestions from "../pages/ai/ResumeSuggestions";
import RecruiterFeedback from "../pages/ai/RecruiterFeedback";

import Profile from "../pages/profile/Profile";
import Settings from "../pages/profile/Settings";

import NotFound from "../pages/NotFound";

import MainLayout from "../layouts/MainLayout";
import ProtectedRoute from "./ProtectedRoute";


function AppRoutes() {
  return (
    <Routes>

      {/* Public Routes */}
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      {/* Protected Layout */}
      <Route
  element={
    <ProtectedRoute>
      <MainLayout />
    </ProtectedRoute>
  }
>

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/resume/upload" element={<UploadResume />} />
        <Route path="/resume/analysis" element={<ResumeAnalysis />} />
        <Route path="/resume/skill-gap" element={<SkillGap />} />

        <Route path="/ai/interview" element={<InterviewQuestions />} />
        <Route path="/ai/roadmap" element={<LearningRoadmap />} />
        <Route path="/ai/suggestions" element={<ResumeSuggestions />} />
        <Route path="/ai/recruiter-feedback" element={<RecruiterFeedback />} />

        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />

      </Route>

      {/* 404 */}
      <Route path="*" element={<NotFound />} />

    </Routes>
  );
}

export default AppRoutes;