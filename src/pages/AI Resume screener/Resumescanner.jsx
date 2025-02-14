import React, { useState, useRef } from 'react';
import { Upload, X, Check, Bold, Italic, Underline, Link2 } from 'lucide-react';
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

const EnhancedResumeScreener = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploaded, setIsUploaded] = useState(false);
  const [text, setText] = useState('');
  const [inputMode, setInputMode] = useState('text'); // 'text' or 'file'
  const fileInputRef = useRef(null);

  const wordsarr = [
    "connection",
    "business",
    "projects",
    "productivity",
    "users"
  ];

  const handleTextChange = (e) => {
   e.target.value ?  setIsUploaded(true) :  setIsUploaded(false)
    setText(e.target.value);
  };

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
      setInputMode('file');
      
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
    setInputMode('text');
  };

  const toggleInputMode = (mode) => {
    setInputMode(mode);
    if (mode === 'text') {
      setFile(null);
      setUploadProgress(0);
      setIsUploaded(false);
    } else {
      setText('');
    }
  };

  return (


      <div className="Resume_sceener">
          <Header />
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
                <Link to={"/Autonomous-portal/JD-Scanner"}><li className='active'>Job Description</li></Link>
                 <Link to={"/Autonomous-portal/ai-resume-sceener"}><li className=''>Resume Scan</li></Link>
                <li>Analysis</li>
                <li>Reports</li>
              </ul>
            </div>
            <div className=" upload-JD-div">
            <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl ">
      <div className="drag-zone-title">
             <img src={sceening_animation} alt="" />
            <div className=''>
            <h2 className="font-semibold">Add/Import Job Description  </h2>
            <p className="text-gray-600">Add the Details of the job you wish to Screen the Resume for.</p>
            </div>
           </div>

      {/* Input Mode Toggle */}
      <div className="flex gap-4 mb-4">
        <button
          onClick={() => toggleInputMode('text')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            inputMode === 'text' 
              ? 'switch-btn-active' 
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Enter Text
        </button>
        <button
          onClick={() => toggleInputMode('file')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            inputMode === 'file' 
              ? 'switch-btn-active' 
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Upload File
        </button>
      </div>

      {/* Text Input Mode */}
      {inputMode === 'text' && (
        <div className="mb-6">
          <div className="border rounded-lg p-4">
            {/* Text Editor Toolbar */}
            <div className="flex items-center gap-2 mb-4 border-b pb-2">
              <button className="p-2 hover:bg-gray-100 rounded">
                <Bold size={20} />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded">
                <Italic size={20} />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded">
                <Underline size={20} />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded">
                <Link2 size={20} />
              </button>
            </div>
            
            {/* Text Area */}
            <textarea
              value={text}
              onChange={handleTextChange}
              placeholder="Enter your text here..."
              className="w-full h-64 resize-none focus:outline-none"
            />
          </div>
        </div>
      )}

      {/* File Upload Mode */}
      {inputMode === 'file' && (
        <div
          onClick={() => fileInputRef.current?.click()}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`
            drop-zone
            border-2 border-dashed rounded-lg p-8 mb-6
            flex flex-col items-center justify-center
            cursor-pointer transition-colors
            ${isDragging ? 'border-blue-500 bg-blue-50' : 'border-blue-200'}
            ${file ? 'pointer-events-none' : 'hover:border-blue-500'}
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
          <p className="drag-drop-text text-gray-700 text-center mb-2">
            Select your file or drag and drop
          </p>
          <p className="file-extension text-gray-500 text-sm">
            png, pdf, jpg, docx accepted
          </p>
        </div>
      )}

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
      {/* Action Buttons */}
      {/* <div className="flex justify-end gap-4">
        <button 
          onClick={() => {
            setText('');
            setFile(null);
            setUploadProgress(0);
            setIsUploaded(false);
          }}
          className="px-6 py-2 rounded-lg border border-gray-300 hover:bg-gray-50"
        >
          Clear
        </button>
        <button 
          className={`px-6 py-2 rounded-lg transition-colors ${
            (text || isUploaded) 
              ? 'bg-blue-500 hover:bg-blue-600 text-white' 
              : 'bg-gray-200 text-gray-500 cursor-not-allowed'
          }`}
          disabled={!text && !isUploaded}
        >
          Scan Now
        </button>
      </div> */}
    </div>

            </div>
          </div>
            </div>        
         </div>
        </div>
  );
};

export default EnhancedResumeScreener;