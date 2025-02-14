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
                <Route element={<LoginPage />} path="/Autonomous-portal/" />
                <Route element={<Dashboard />} path="/dashboard" />
                <Route element={<ProfileGen />} path="/profile-generator" />
                <Route element={<AnimatedIcons />} path="/icondanimate" />
                <Route element={<IntelligentResumeScreener />} path="/ai-resume-sceener" />
                <Route element={<EnhancedResumeScreener />} path="/Enhanced-Resume-Screener" />
            </Routes>
    )
}