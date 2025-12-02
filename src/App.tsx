import LoginPage from "./components/Authentication/LoginPage";
import { Navigate, Route, Routes } from "react-router-dom";
import SignInPage from "./components/Authentication/SignInPage";
import LockerEntry from "./components/Home/LockerEntry";
import EnterCode from "./components/Home/EnterCode";
import QRScanning from "./components/Home/QRScanning";
import LockerSize from "./components/Home/LockerSize";

import KycForm from "./components/KycForm/KycForm";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login-Page" replace />} />
        <Route path="/login-Page" element={<LoginPage />} />
        <Route path="/signin-Page" element={<SignInPage />} />
        <Route path="/lockerEntry" element={<LockerEntry />} />
        <Route path="/enterCode" element={<EnterCode />} />
        <Route path="/QRCode" element={<QRScanning />} />
        <Route path="/locker-size" element={<LockerSize />} />
        <Route path="/kyc" element={<KycForm />} />
      </Routes>
    </>
  );
}

export default App;
