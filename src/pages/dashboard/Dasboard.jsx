import React, { useEffect } from 'react';
import { Mail, Settings, Calendar, Bell, Grid, LogOut, Plus, Search, Brain } from 'lucide-react';
import './Dashboard.css'
import Header from '../../Component/Common component/Header';
import Footer from '../../Component/Common component/Footer';
import three_circle from '../../assets/images/dashboard-images/dashboard-bg.png'
import JD_maker from '../../assets/images/dashboard-images/JD-maker-icon.svg'
import AI_application from '../../assets/images/dashboard-images/AI-application-scanner.svg'
import AI_interview from '../../assets/images/dashboard-images/AI-interview.svg'
import IA_screener from '../../assets/images/dashboard-images/IA-screener.svg'
import Navbar from '../../Component/Common component/Navbar';
import CallToAction from '../../Component/Common component/CallToAction';
import LicenseAndTC from '../../Component/Common component/LicenseAndTC';
import { Link } from 'react-router-dom';
import HeadingTextAnimation from '../../Component/Common component/headingTextAniamtion';
const Dashboard = () => {

  const wordsarr = [
    "connection",
    "business",
    "projects",
    "productivity",
    "users"
  ];

  

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dashboard-section-bg">
      <img src={three_circle} alt=""  className='dashboard-bg'/>
      <Navbar />
      <Header />
      <CallToAction innertext={"Talk to our expert"} />
      <LicenseAndTC />
      
      {/* Sidebar */}
    <div className='sidebar-container'>
    <div className='sidebar-gradient'>
        <div className="left-0 top-0 bg-white bg-opacity-90 p-6 dashboard-sidebar">
          <div className="items-center profile-card">
            <div className="profile-circle rounded-full bg-gray-300"></div>
            <div>
              <h3 className="font-semibold ">Omkar Thorat</h3>
              <p className="text-sm text-gray-600">Talent Acquisition</p>
            </div>
          </div>

          <div className=" sidebar-menu-list">
            <p className="text-sm font-medium text-gray-500 mb-4">AI on the Deck</p>
            <div className="main-menu-list">
              <button className="flex items-center space-x-3 w-full p-2 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 6.75c0-1.768 0-2.652.55-3.2C4.097 3 4.981 3 6.75 3s2.652 0 3.2.55c.55.548.55 1.432.55 3.2s0 2.652-.55 3.2c-.548.55-1.432.55-3.2.55s-2.652 0-3.2-.55C3 9.403 3 8.519 3 6.75m0 10.507c0-1.768 0-2.652.55-3.2c.548-.55 1.432-.55 3.2-.55s2.652 0 3.2.55c.55.548.55 1.432.55 3.2s0 2.652-.55 3.2c-.548.55-1.432.55-3.2.55s-2.652 0-3.2-.55C3 19.91 3 19.026 3 17.258M13.5 6.75c0-1.768 0-2.652.55-3.2c.548-.55 1.432-.55 3.2-.55s2.652 0 3.2.55c.55.548.55 1.432.55 3.2s0 2.652-.55 3.2c-.548.55-1.432.55-3.2.55s-2.652 0-3.2-.55c-.55-.548-.55-1.432-.55-3.2m0 10.507c0-1.768 0-2.652.55-3.2c.548-.55 1.432-.55 3.2-.55s2.652 0 3.2.55c.55.548.55 1.432.55 3.2s0 2.652-.55 3.2c-.548.55-1.432.55-3.2.55s-2.652 0-3.2-.55c-.55-.548-.55-1.432-.55-3.2"/></svg>
                <span>Dashboard</span>
              </button>
              <button className="flex items-center space-x-3 w-full p-2 rounded-lg">
                <Brain className="w-5 h-5 text-white" />
                <span>AI Processes</span>
              </button>
              <button className="flex items-center space-x-3 w-full p-2 rounded-lg">
                <Calendar className="w-5 h-5 text-white" />
                <span>Calendar</span>
              </button>
              <button className="flex items-center space-x-3 w-full p-2 rounded-lg">
                <Mail className="w-5 h-5 text-white" />
                <span>Mail</span>
              </button>
              <button className="flex items-center space-x-3 w-full p-2 rounded-lg">
                <Bell className="w-5 h-5 text-white" />
                <span>Notification</span>
              </button>
              <button className="flex items-center space-x-3 w-full p-2 rounded-lg">
                <Settings className="w-5 h-5 text-white" />
                <span>Settings</span>
              </button>
            </div>
          </div>

          <div className=" bottom-6 left-6 sidebar-bottom-btn ">
            <button className="  text-center text-white rounded-lg request-service-btn">
              Request Service
            </button>
            <button className="flex justify-start  items-center border rounded-lg add-newplug-btn">
             <div className="plus-div">
             <Plus className="w-4 h-4" />
             </div>
              <span>Add new plugin</span>
            </button>
          </div>
        </div>
      </div>
     
    </div>
     

      {/* Main Content */}
      <div className="dashboard_main_section">
        <div className=" title-parent">
          <h1 className="text-4xl font-bold ">
          Welcome to Your <HeadingTextAnimation mainWord={"AI Hiring"} wholeArray={wordsarr} /> Revolution!
          </h1>
        
        </div>

       <div className="dashboard-subtitle">
       <h3 className="text-2xl font-semibold">
          An Intelligent Ecosystem for <span className="">Autonomous Hiring</span>
        </h3>
       </div>

        <div className="grid grid-cols-4 gap-6 four-aspect-grid">
         <Link to={"/Autonomous-portal/profile-generator"}>
         <div className="relative from-blue-50 to-purple-100 dashboard-grid-box active">
            <img src={JD_maker} alt="" />
            <div className="p-6">
              <h4 className="text-lg font-semibold mb-3">
                Automated Job Description Maker
              </h4>
              <p className="text-gray-600">
                Craft precise job descriptions by blending cultural fit, technical needs, and role-specific requirements. Tailored to your hiring goals
              </p>
            </div>
          </div></Link>

          <div className="relative bg-white dashboard-grid-box">
            <img src={AI_application} alt="" />
            <div className="p-6">
              <h4 className="text-lg font-semibold text-navy-900 mb-3">
                AI Powered Application Screener
              </h4>
              <p className="text-gray-600">
                Screen and filter candidates automatically by analyzing resumes for skills, experience, and role alignment with advanced AI.
              </p>
            </div>
          </div>

          <div className="relative bg-white dashboard-grid-box">
            <img src={IA_screener} alt="" />
            <div className="p-6">
              <h4 className="text-lg font-semibold text-navy-900 mb-3">
                Intelligent Aptitude Screener
              </h4>
              <p className="text-gray-600">
                Assess technical and cognitive abilities with AI-generated questionnaires designed for aptitude and skill evaluation.
              </p>
            </div>
          </div>

          <div className="relative from-pink-50 to-purple-100 dashboard-grid-box">
            <img src={AI_interview} alt="" />
            <div className="p-6">
              <h4 className="text-lg font-semibold text-navy-900 mb-3">
                AI Interview <br /> Insight Engine
              </h4>
              <p className="text-gray-600">
                Analyze candidate behavior, pulse, and body language for deeper interview insights powered by AI-driven metrics
              </p>
            </div>
          </div>
        </div>
        <div className='view-plan-bottomline-container'>
          <div className="text-center view-plan-bottomline">
            <p>Used by top teams across the globe</p>
            <button className="text-white px-6 py-2 rounded-full ">
              View Plans
            </button>
          </div>
        </div>
        <Footer centerText={"Enabled by ESDS Software Solution Limited : Powering Innovation"} />
    
      </div>
    </div>
  );
};

export default Dashboard;