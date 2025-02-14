import { Link } from "react-router-dom"
export default function Header() {
    return(
        <div className="top-line">
            <div className="navbar-list">
                
            </div>
            <ul>
            
                <li><Link to={"/job-description"}>Job Description</Link></li>
                <li><Link to={"/job-description"}>Screening</Link></li>
                <li><Link to={"/job-description"}>Assessment</Link></li>
                <li><Link to={"/job-description"}>Interview</Link></li>
            </ul>
        </div>
    )
}