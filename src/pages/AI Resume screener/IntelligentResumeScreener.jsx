import React, { useState, useRef } from 'react';
import { Upload, X, Check } from 'lucide-react';
import './ResumerScreener.css'
import sceener_img from '../../assets/images/Resume-screener/scsreener-leftside-img.png'
import pdf_icon from '../../assets/images/Resume-screener/pdf-icon.png'
import Header from '../../Component/Common component/Header';
import Footer from '../../Component/Common component/Footer';
import Navbar from '../../Component/Common component/Navbar';
import { Link } from 'react-router-dom';
import CallToAction from '../../Component/Common component/CallToAction';
import sceening_animation from '../../assets/images/Resume-screener/sceening-animation.gif'
import HeadingTextAnimation from '../../Component/Common component/headingTextAniamtion';

const IntelligentResumeScreener = () => {
  
    const [isDragging, setIsDragging] = useState(false);
    const [file, setFile] = useState(null);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [isUploaded, setIsUploaded] = useState(false);
    const fileInputRef = useRef(null);

    const wordsarr = [
      "connection",
      "business",
      "projects",
      "productivity",
      "users"
    ];
  
    const handleDragOver = (e) => {
      e.preventDefault();
      setIsDragging(true);
    };
  
    const handleDragLeave = (e) => {
      e.preventDefault();
      setIsDragging(false);
    };
  
    const handleDrop = (e) => {
      e.preventDefault();
      setIsDragging(false);
      const droppedFile = e.dataTransfer.files[0];
      handleFileUpload(droppedFile);
    };
  
    const handleFileSelect = (e) => {
      const selectedFile = e.target.files[0];
      handleFileUpload(selectedFile);
    };
  
    const handleFileUpload = (file) => {
      if (file) {
        setFile(file);
        setUploadProgress(0);
        setIsUploaded(false);
        
        // Simulate upload progress
        const interval = setInterval(() => {
          setUploadProgress(prev => {
            if (prev >= 100) {
              clearInterval(interval);
              setIsUploaded(true);
              return 100;
            }
            return prev + 5;
          });
        }, 100);
      }
    };
  
    const handleRemoveFile = () => {
      setFile(null);
      setUploadProgress(0);
      setIsUploaded(false);
    };
  

  return (
    <div className="Resume_sceener">
      <Header  />
      <Navbar isHomeicon={true} />
       <Footer centerText={"Enabled by ESDS Software Solution Limited : Powering Innovation"} />
       <CallToAction innertext={"Talk to our expert"} />
     <div className="right-side-ellipse"></div>
     <div className="left-side-ellipse"></div>
     <div className='bg-blur-container'>
        <div className='screener-container'>
            <div className="AI-sceener-img">
                <div className='screener-title'>
                    <h1>Intelligent Resume <HeadingTextAnimation mainWord={"Screener"} wholeArray={wordsarr}/></h1>
                    <div className='sceener-leftside'>
                        <img src={sceener_img} alt="" />
                    </div>
                </div>
            </div>
            <div className='drag-drop-container'>
              <div className="scanner-navbar">
                <ul>
                <Link to={"/Autonomous-portal/JD-Scanner"}><li className=''>Job Description</li></Link>
                  <li className='active'>Resume Scan</li>
                  <li>Analysis</li>
                  <li>Reports</li>
                </ul>
              </div>
            <div className=" upload-resume-div">

      <div className="drag-zone-title">
        <img src={sceening_animation} alt="" />
       <div className=''>
       <h2 className="font-semibold">Upload Candidates Resume</h2>
       <p className="text-gray-600">Import candidates resumes to scan it through AI.</p>
       </div>
      </div>

      {/* Drag & Drop Zone */}
      <div
        onClick={() => fileInputRef.current?.click()}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`
          border-2 border-dashed rounded-lg drop-zone
          flex flex-col items-center justify-center
          cursor-pointer transition-colors
          ${isDragging ? 'border-blue-500 bg-blue-50' : 'border-blue-200'}
        `}
      >
        <input
          ref={fileInputRef}
          type="file"
          onChange={handleFileSelect}
          accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
          className="hidden"
        />
        
        <Upload className="w-12 h-12 text-blue-500 mb-4" />
        <p className="text-center drag-drop-text">
          select your file or drag and drop
        </p>
        <p className="file-extension">
          png, pdf, jpg, docx accepted
        </p>
      </div>

      {/* Upload Progress */}
      {file && (
        <div className="mt-4 progress-container p-4 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
            <img src={pdf_icon} alt="" className='pdf-icon' />
              <span className="text-gray-700">{file.name}</span>
            </div>
            <button 
              onClick={handleRemoveFile}
              className="text-gray-400 hover:text-gray-600"
            >
              <X size={20} />
            </button>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>{Math.round(file.size / 1024)} KB of {Math.round(file.size / 1024)} KB</span>
            <span>•</span>
            <span>{isUploaded ? 'Completed' : 'Uploading...'}</span>
          </div>

          <div className="mt-2 bg-gray-200 rounded-full h-2 relative overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full progress-bar transition-all duration-300"
              style={{ width: `${uploadProgress}%` }}
            />
          </div>

          {isUploaded && (
            <div className="flex justify-end mt-2">
              <div className="bg-green-500 text-white rounded-full p-1">
                <Check size={16} />
              </div>
            </div>
          )}
        </div>
      )}

      {/* Scan Button */}
      <div className="flex justify-center scan-btn">
        <button 
          className={` rounded-lg transition-colors ${
            isUploaded 
              ? 'bg-blue-500 hover:bg-blue-600 text-white' 
              : 'bg-gray-200 text-gray-500 cursor-not-allowed'
          }`}
          disabled={!isUploaded}
        >
          Scan Now
        </button>
      </div>
    </div>
            </div>
        </div>        
     </div>
    </div>
  );
};

export default IntelligentResumeScreener;