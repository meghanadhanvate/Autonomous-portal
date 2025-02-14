import './Navbar.css'
import UseAnimations from 'react-useanimations';
// Import specific animations you want to use
import neeraj from '../../assets/images/navbar-user.png'
import menu2 from 'react-useanimations/lib/menu2';
import heart from 'react-useanimations/lib/heart'
import { useLayoutEffect, useState } from 'react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';

export default function Navbar({isHomeicon}) {
    let [showNotify, setShowNotify] = useState(false)
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

        let notification =[
            {
                id : 1,
                title : "lorem ipsum",
                subtitle : "Lorem ipsum dolor sit amet consectetur",
                time : "5m"

            },
            {
                id : 2,
                title : "lorem ipsum",
                subtitle : "Lorem ipsum dolor sit amet consectetur",
                time : "5m"

            },
            {
                id : 3,
                title : "lorem ipsum",
                subtitle : "Lorem ipsum dolor sit amet consectetur",
                time : "5m"

            }
        ]

        function showNotification() {
            setShowNotify(!showNotify)
            gsap.fromTo(".notify-model", {opacity: 0, y : -20} ,{opacity : 1, y : 0, duration: 0.8, ease : "power4.inOut"})
        }
      
    return(
        <div className='navabr-container'>
            <div className="home-icon">
            {isHomeicon ? <Link to={"/Autonomous-portal/"}><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" d="M12 15v3m10-5.796v1.521c0 3.9 0 5.851-1.172 7.063S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.212S2 17.626 2 13.725v-1.521c0-2.289 0-3.433.52-4.381c.518-.949 1.467-1.537 3.364-2.715l2-1.241C9.889 2.622 10.892 2 12 2s2.11.622 4.116 1.867l2 1.241c1.897 1.178 2.846 1.766 3.365 2.715"/></svg></Link> : null}
            </div>
            <div className="notify-search-user">
                <button className='search-icon' onClick={(e) => {handleSearchActive(e.target)}}>
                <svg className='searchicon-svg' xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"  d="m21 21l-4-4m2-6a8 8 0 1 1-16 0a8 8 0 0 1 16 0"/></svg>
                <input type="text" placeholder='Search' />
                <svg className='cross-icon' xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="currentColor" d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z"/></svg>
                </button>
                <button className='notification-icon' onClick={() => {showNotification()}}>
                    {showNotify ? <div className='notify-model active-notification'>
                        <div className='header'>
                            <span className='notify-text'>Notification</span>
                            <span className='notify-text'>5 new</span>
                        </div>
                        <ul>
                            {notification.map((ele,index) => {
                                return(
                                    <li key={index}>
                                        <div className='notify-item'>
                                            <div className="notify-title">{ele.title}</div>
                                            <div className="notify-subtitle">{ele.subtitle}</div>
                                        </div>
                                        <div className='notify-time'>
                                            {ele.time}
                                        </div>
                                        </li>
                                )
                            })}
                        </ul>
                    </div> : null}
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M18.75 9.71v-.705C18.75 5.136 15.726 2 12 2S5.25 5.136 5.25 9.005v.705a4.4 4.4 0 0 1-.692 2.375L3.45 13.81c-1.011 1.575-.239 3.716 1.52 4.214a25.8 25.8 0 0 0 14.06 0c1.759-.498 2.531-2.639 1.52-4.213l-1.108-1.725a4.4 4.4 0 0 1-.693-2.375Z"/><path stroke-linecap="round" d="M7.5 19c.655 1.748 2.422 3 4.5 3s3.845-1.252 4.5-3"/></g></svg>
                </button>
                <div className=" relative space-x-2 user-tab">
                    {/* <div className="outline-shape-div"></div> */}
                    <div className="shape-div"></div>

                    <div className="description-user">
                        <p>Guest User</p>
                    </div>
                    <div className="user-img">
                        <img src={neeraj} alt="user" />
                    </div>
                </div>
            </div>
        </div>
    )
}