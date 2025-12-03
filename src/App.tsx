import LoginPage from "./components/Authentication/LoginPage";
import { Navigate, Route, Routes } from "react-router-dom";
import SignInPage from "./components/Authentication/SignInPage";
import LockerEntry from "./components/Home/LockerEntry";
import EnterCode from "./components/Home/EnterCode";
import QRScanning from "./components/Home/QRScanning";
import LockerSize from "./components/Home/LockerSize";

import KycForm from "./components/KycForm/KycForm";
import Layout from "./components/OutLet/Outlet";
import DashBoard from "./components/Admin/DashBoard";
import Addlocker from "./components/Admin/AddLocker";
import ManageLocker from "./components/Admin/ManageLocker";
import AssignLocker from "./components/Admin/AssignLocker";
import ManageAssignLocker from "./components/Admin/ManageAssignLocker";
function App() {
  return (
    <>
      <Routes>
       
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/sub-admin" element={<DashBoard />} />
          <Route path="/add-locker" element={<Addlocker />} />
          <Route path="/manage-locker" element={<ManageLocker/>} />
          <Route path="/assign-locker" element={<AssignLocker/>} />
          <Route path="/manage-assignLocker" element={<ManageAssignLocker/>} />
        
        </Route>
        

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
