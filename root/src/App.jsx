import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useUserSync } from "@/context/UserSyncContext";
import { useEffect } from "react";
import { supabase } from "@/lib/supabase";

// Page Components
import LoginView from "@/components/auth/LoginView";
import HomePage from "@/pages/HomePage";
import CodexLibrary from "@/pages/CodexLibrary";
import PortalView from "@/pages/PortalView";
import UserProfile from "@/pages/UserProfile";
import Reflections from "@/pages/Reflections";
import JournalPage from "@/pages/JournalPage"; // ✅ New Import
import OnboardingRouter from "@/views/Onboarding/OnboardingRouter"; // ✅ NEW IMPORT

export default function App() {
  const { user, loading } = useUserSync();

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center text-white">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <Router>
        <Routes>
          <Route path="/" element={<PortalView />} />
          <Route path="/portal" element={<PortalView />} />
          <Route path="/login" element={<LoginView />} />
          <Route path="/home" element={user ? <HomePage /> : <Navigate to="/login" />} />
          <Route path="/library" element={user ? <CodexLibrary /> : <Navigate to="/login" />} />
          <Route path="/profile" element={user ? <UserProfile /> : <Navigate to="/login" />} />
          <Route path="/reflections" element={user ? <Reflections /> : <Navigate to="/login" />} />
          <Route path="/journal" element={user ? <JournalPage /> : <Navigate to="/login" />} />
          <Route path="/onboarding/*" element={<OnboardingRouter />} /> {/* ✅ NEW ROUTE */}
          <Route path="*" element={<div className="p-10 text-center">404 – Page not found</div>} />
        </Routes>
      </Router>
    </div>
  );
}
