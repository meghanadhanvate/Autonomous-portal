import React, { useEffect, useState } from 'react';
import { Eye, EyeOff, Bell, Search, ChevronDown,Phone } from 'lucide-react';
import './Login.css'
import first_box from '../../assets/images/Login-page/first-box.png'
import second_box from '../../assets/images/Login-page/second-box.png'
import third_box from '../../assets/images/Login-page/third-box.png'
import fourth_box from '../../assets/images/Login-page/fourth-box.png'
import fifth_box from '../../assets/images/Login-page/fifth-box.png'
import card_item1 from '../../assets/images/Login-page/Card item1.png'
import card_item2 from '../../assets/images/Login-page/Card item2.png'
import card_item3 from '../../assets/images/Login-page/Card item3.png'
import card_item4 from '../../assets/images/Login-page/Card item4.png'
import card_item5 from '../../assets/images/Login-page/Card item5.png'
import { motion } from 'motion/react';
import login_bg from '../../assets/images/Login-page/login-bg.png'
import UseAnimations from "react-useanimations";
import searchToX from 'react-useanimations/lib/searchToX';
import { Link } from 'react-router-dom';
import neeraj from '../../assets/images/Login-page/user-img.png'
import Footer from '../../Component/Common component/Footer';
import Navbar from '../../Component/Common component/Navbar';



const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState('');

  function handleSearchActive(element) {
  console.log(element.classList.contains("active"))
    if(element.classList.contains("active")) {
      element.classList.remove("active")
      document.querySelector(".searchicon-svg").style.transform = "rotateX(0deg)"
    document.querySelector(".cross-icon").style.transform = "rotateX(90deg)"
    }else {
      element.classList.add("active")
       document.querySelector(".searchicon-svg").style.transform = "rotateX(90deg)"
    document.querySelector(".cross-icon").style.transform = "rotateX(0deg)"
    }
    
  }

  const validateForm = () => {
    const newErrors = {};
    
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    
  },[])

  const handleLogin = async (e) => {
    e.preventDefault();
    setApiError('');

    if (validateForm()) {
      setIsLoading(true);
      try {
        const response = await Axios.post('/api/auth/login', {
          email,
          password,
          keepLoggedIn
        });

        if (response.data.token) {
          // Store token in localStorage
          localStorage.setItem('token', response.data.token);
          
          // Store user data
          if (response.data.user) {
            localStorage.setItem('userId', response.data.user.id);
            localStorage.setItem('userRole', response.data.user.role);
            localStorage.setItem('userData', JSON.stringify(response.data.user));
          }

          // Update Axios default headers with new token
          Axios.defaults.headers.common['Authorization'] = response.data.token;

          // Set session expiry if not "keep logged in"
          if (!keepLoggedIn) {
            const expiryTime = new Date().getTime() + (24 * 60 * 60 * 1000); // 24 hours
            localStorage.setItem('sessionExpiry', expiryTime);
          }

          // Redirect to dashboard or home page
          window.location.href = '/dashboard';
        }
      } catch (error) {
        console.error('Login error:', error);
        setApiError(
          error.response?.data?.message || 
          error.msg || 
          'An error occurred during login. Please try again.'
        );
      } finally {
        setIsLoading(false);
      }
    }
  };

  // Session expiry check on component mount
  React.useEffect(() => {
    const checkSession = () => {
      const sessionExpiry = localStorage.getItem('sessionExpiry');
      if (sessionExpiry && new Date().getTime() > parseInt(sessionExpiry)) {
        // Session expired, clear storage and redirect to login
        localStorage.clear();
        window.location.href = '/login';
      }
    };

    checkSession();
    // Optional: Check session expiry periodically
    const interval = setInterval(checkSession, 1000 * 60); // Check every minute

    return () => clearInterval(interval);
  }, []);


  const candidates = [
    { name: 'Siddhesh J.', role: 'Python Developer - Entry Level', platform: 'LinkedIn', match: '77%' },
    { name: 'Aastha Singh', role: 'React Js Developer - 3 Years', platform: 'Indeed', match: '90%' },
    { name: 'Anjali Gupta', role: 'Senior HRBP - 10 Years', platform: 'Naukri', match: '84%' },
    { name: 'Tejas Sharma', role: 'Sr. Sales Manager - 14 Years', platform: 'Monster', match: '91%' },
    { name: 'Bhagyashree Mehta', role: 'UI/UX Designer - 5 years', platform: 'Upwork', match: '91%' }
  ];

  return (
    <div className='login-form-container'>
    <div className="min-h-screen flex">
      {/* Left Section */}
      <div className="login-Form-leftSide relative flex flex-col items-center justify-center ">
          <div className='login-grid-images'>
            <div className="first-row">
            <motion.div className='pop-up-model'
        animate={{
          y: [0, 5, 0], // Move up (-50px), then down to the original position
        }}
        transition={{
          duration: 3, // Duration for one complete animation cycle
          repeat: Infinity, // Loop the animation infinitely
          repeatType: "loop", // Loop type
          ease: "easeInOut", // Smooth easing
        }}
      >
              <div className="">
                <img src={card_item1} alt="" />
              </div>
              </motion.div>
              <motion.div className='pop-up-model2'
        animate={{
          y: [0, 5, 0], // Move up (-50px), then down to the original position
        }}
        transition={{
          duration: 3, // Duration for one complete animation cycle
          repeat: Infinity, // Loop the animation infinitely
          repeatType: "loop", // Loop type
          ease: "easeInOut", // Smooth easing
        }}
      >
              <div className="">
                <img src={card_item2} alt="" />
              </div>
              </motion.div>
              <div className="first-box">
                <img src={first_box} alt="first person" />
              </div>
              <div className="second-box">
                <img src={second_box} alt="second person" />
              </div>
            </div>
            <div className="second-row">
            <motion.div className='pop-up-model'
        animate={{
          y: [0, 5, 0], // Move up (-50px), then down to the original position
        }}
        transition={{
          duration: 3, // Duration for one complete animation cycle
          repeat: Infinity, // Loop the animation infinitely
          repeatType: "loop", // Loop type
          ease: "easeInOut", // Smooth easing
        }}
      >
              <div className="">
                <img src={card_item5} alt="" />
              </div>
              </motion.div>
              <motion.div className='pop-up-model2'
        animate={{
          y: [0, 5, 0], // Move up (-50px), then down to the original position
        }}
        transition={{
          duration: 3, // Duration for one complete animation cycle
          repeat: Infinity, // Loop the animation infinitely
          repeatType: "loop", // Loop type
          ease: "easeInOut", // Smooth easing
        }}
      >
              <div className="">
                <img src={card_item3} alt="" />
              </div>
              </motion.div>
              <div className="first-box">
                <img src={third_box} alt="third person" />
              </div>
              <div className="second-box">
                <img src={fourth_box} alt="fourth person" />
              </div>
            </div>
            <div className="third-row">
            <motion.div className='pop-up-model'
        animate={{
          y: [0, 5, 0], // Move up (-50px), then down to the original position
        }}
        transition={{
          duration: 3, // Duration for one complete animation cycle
          repeat: Infinity, // Loop the animation infinitely
          repeatType: "loop", // Loop type
          ease: "easeInOut", // Smooth easing
        }}
      >
              <div className="">
                <img src={card_item4} alt="" />
              </div>
              </motion.div>
              <div className="first-box">
                  <img src={fifth_box} alt="fifth person" />
              </div>
            </div>
          </div>
           
      </div>

      {/* Right Section */}
      <div className="login-Form-rightside rounded-l-3xl p-12 flex flex-col justify-center">
        <Navbar isHomeicon={false} />

        <div className=" mx-auto w-full login-form-box">
          <h1 className="font-bold mb-2 login-form-title">Welcome to the Future of Hiring – Smarter, Faster, Autonomous. 👋</h1>
          <p className="text-white mb-8 subtitle-login-form">Empowering Talent Discovery with Autonomous Intelligence.</p>

          <form onSubmit={handleLogin} className=" login-form">
            <div className='relative'>
              <label className="text-sm font-medium text-gray-700 mb-1 input-label">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg form-input"
                placeholder="Demo_User@gmail.com"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div className="relative password-div">
              <label className="text-sm font-medium text-gray-700 mb-1 input-label2">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg form-input"
                  placeholder="Password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5 text-white" />
                  ) : (
                    <Eye className="w-5 h-5 text-white" />
                  )}
                </button>
              </div>
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            </div>

            <div className="flex items-center justify-between mt-6 keep-forget-pass">
            <div className="kepp-login flex">
            <input
                type="checkbox"
                checked={keepLoggedIn}
                onChange={(e) => setKeepLoggedIn(e.target.checked)}
                className="h-4 w-4 rounded checkbox"
              />
              <label className="ml-2 text-sm text-gray-600 checkbox-label">Keep me logged in</label>
            </div>
            <div className="forget-pass">
             <Link to={'/forget-password'}>Forget Password?</Link>
            </div>
            </div>

            <button
              type="submit"
              className="w-full px-4 rounded-lg submit-btn"
            >
              Log In & Discover Top Talent
            </button>

            <div className="text-center relative divider-or">
              <span className="text-gray-500">or</span>
            </div>

            <button
              type="button"
              className="w-full bg-gray-600 text-white py-2 px-4 rounded-lg login-otp-btn"
            >
              Login with OTP
            </button>
          </form>

         
        </div>
        <div className='collobrate-btn'>
         <p>Let's Collaborate</p>
         <Phone />
        </div>
      </div>
    </div>
    <Footer centerText={"Enabled by ESDS Software Solution Limited : Powering Innovation"} />
      {/* <div className='bottom-line'>
        <div className="login-footer-div">
            <p className='footer-text'>Enabled by ESDS Software Solution Limited : Powering Innovation.</p>
        </div>
      </div> */}
    </div>
  );
};

export default LoginPage;