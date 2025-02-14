import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/auth/Login";
import Dashboard from "./pages/dashboard/Dasboard";
import ProfileGenerator from "./pages/AI profile Generator/ProfileGenerator";
import IntelligentResumeScreener from "./pages/AI Resume screener/IntelligentResumeScreener";
import AnimatedIcons from "./pages/IconsAniamte";
import EnhancedResumeScreener from "./pages/AI Resume screener/Resumescanner";
import ProfileGen from "./pages/AI profile Generator/Profilegen";
export default function Routing() {
    return(
            <Routes>
                <Route element={< Dashboard />} path="/Autonomous-portal/" />
                <Route element={<LoginPage />} path="/Autonomous-portal/Login" />
                <Route element={<ProfileGen />} path="/Autonomous-portal/profile-generator" />
                <Route element={<AnimatedIcons />} path="/Autonomous-portal/icondanimate" />
                <Route element={<IntelligentResumeScreener />} path="/Autonomous-portal/ai-resume-sceener" />
                <Route element={<EnhancedResumeScreener />} path="/Autonomous-portal/JD-Scanner" />
            </Routes>
    )
}