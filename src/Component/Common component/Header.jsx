import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);

    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location.pathname]);

    const navItems = [
        { path: "/Autonomous-portal/profile-generator", label: "Job Description" },
        { path: "/Autonomous-portal/JD-Scanner", label: "Screening" },
        { path: "/job-description", label: "Assessment" },
        { path: "/job-description", label: "Interview" }
    ];

    return (
        <div className="top-line">
            
            <div className="navbar-list"></div>
            <ul>
                {navItems.map((item, index) => (
                    <li
                        key={index}
                        className={`header-link ${activeLink === item.path ? "active" : ""}`}
                        onClick={() => setActiveLink(item.path)}
                    >
                        <Link to={item.path}>{item.label}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
