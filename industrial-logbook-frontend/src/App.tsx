import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

// Student Pages
import StudentDashboard from "./pages/Student/Dashboard";
import Logbook from "./pages/Student/Logbook";
import SubmitReport from "./pages/Student/SubmitReport";
import Feedback from "./pages/Student/Feedback";
import Profile from "./pages/Student/Profile";

// Academic Supervisor Pages
import AcademicDashboard from "./pages/AcademicSupervisor/Dashboard";
import ViewStudents from "./pages/AcademicSupervisor/ViewStudents";
import ReviewLogbooks from "./pages/AcademicSupervisor/ReviewLogbooks";
import SubmitRemarks from "./pages/AcademicSupervisor/SubmitRemarks";
import AcademicReports from "./pages/AcademicSupervisor/Reports";

// Industry Supervisor Pages
import IndustryDashboard from "./pages/IndustrySupervisor/Dashboard";
import AssignedInterns from "./pages/IndustrySupervisor/AssignedInterns";
import EvaluateInterns from "./pages/IndustrySupervisor/EvaluateInterns";
import FeedbackHistory from "./pages/IndustrySupervisor/FeedbackHistory";

// Super Admin Pages
import SuperAdminDashboard from "./pages/SuperAdmin/Dashboard";
import ManageUsers from "./pages/SuperAdmin/ManageUsers";
import ManageInstitutions from "./pages/SuperAdmin/ManageInstitutions";
import SystemReports from "./pages/SuperAdmin/SystemReports";
import Settings from "./pages/SuperAdmin/Settings";


const App: React.FC = () => (
  
  <Router>
    <Routes>
      {/* Public */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Student */}
      <Route path="/student/dashboard" element={<StudentDashboard />} />
      <Route path="/student/logbook" element={<Logbook />} />
      <Route path="/student/submit-report" element={<SubmitReport />} />
      <Route path="/student/feedback" element={<Feedback />} />
      <Route path="/student/profile" element={<Profile />} />

      {/* Academic Supervisor */}
      <Route path="/academic/dashboard" element={<AcademicDashboard />} />
      <Route path="/academic/view-students" element={<ViewStudents />} />
      <Route path="/academic/review-logbooks" element={<ReviewLogbooks />} />
      <Route path="/academic/submit-remarks" element={<SubmitRemarks />} />
      <Route path="/academic/reports" element={<AcademicReports />} />

      {/* Industry Supervisor */}
      <Route path="/industry/dashboard" element={<IndustryDashboard />} />
      <Route path="/industry/assigned-interns" element={<AssignedInterns />} />
      <Route path="/industry/evaluate-interns" element={<EvaluateInterns />} />
      <Route path="/industry/feedback-history" element={<FeedbackHistory />} />

      {/* Super Admin */}
      <Route path="/superadmin/dashboard" element={<SuperAdminDashboard />} />
      <Route path="/superadmin/manage-users" element={<ManageUsers />} />
      <Route path="/superadmin/manage-institutions" element={<ManageInstitutions />} />
      <Route path="/superadmin/system-reports" element={<SystemReports />} />
      <Route path="/superadmin/settings" element={<Settings />} />
    </Routes>
  </Router>
);

export default App;