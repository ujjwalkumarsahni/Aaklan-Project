import React from 'react'
import Home from './pages/Home.jsx'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Coding from './pages/Coding.jsx'
import RoboticsAI from './pages/RoboticsAI.jsx'
import VRARLab from './pages/VRARLab.jsx'
import Workshop from './pages/Workshop.jsx'
import Books from './pages/Books.jsx'
import OnlineCourses from './pages/OnlineCourses.jsx'
import PrePrimarySchool from './pages/PrePrimarySchool.jsx'
import ContectUs from './pages/ContectUs.jsx'
import AboutUs from './pages/AboutUs.jsx'
import ScrollToTop from './Utils/ScrollToTop.jsx'
import TermsAndConditions from './pages/TermsAndConditions.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import RefundPolicy from './pages/RefundPolicy.jsx'
import Career from './pages/Career.jsx'
import Blog from './pages/Blog.jsx'
import CodingBootcamp from './pages/CodingBootCamp.jsx'
import LMS from './pages/LMS.jsx'
import Dashboard from './Dashboard/Dashboard.jsx'
import VideoUpload from './pages/VideoUpload.jsx'
import Dashboard2 from './Dashboard/Dashboard2.jsx'

const App = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coding" element={<Coding />} />
          <Route path="/robotics-ai" element={<RoboticsAI />} />
          <Route path="/vr-ar-lab" element={<VRARLab />} />
          <Route path="/lms" element={<LMS />} />
          <Route path="/books" element={<Books />} />

          {/* footer link */}
          <Route path="/about" element={<AboutUs />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/refund" element={<RefundPolicy />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<ContectUs />} />
          <Route path="/blog" element={<Blog />} />


          <Route path="/programs/computer-coding-books-1-8" element={<CodingBootcamp />} />

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard2" element={<Dashboard2 />} />
          <Route path="/video-submition" element={<VideoUpload />} />

        </Routes>
      </main>
      <Footer />  
    </div>
  )
}

export default App