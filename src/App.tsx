import LoginPage from "./components/Authentication/LoginPage";
import { Navigate, Route, Routes } from "react-router-dom";
import SignInPage from "./components/Authentication/SignInPage";
import LockerEntry from "./components/Home/LockerEntry";
import EnterCode from "./components/Home/EnterCode";
import QRScanning from "./components/Home/QRScanning";
import LockerSize from "./components/Home/LockerSize";
import PersonalDetails from "./components/KycForm/PersonalDetails";
import AddressDetails from "./components/KycForm/AddressDetails";
import DocumentDetails from "./components/KycForm/DocumentDetails";

import Layout from "./components/Outlet/Outlet";
function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/personal-details" element={<PersonalDetails />} />
          <Route path="/address-details" element={<AddressDetails />} />
          <Route path="/document-details" element={<DocumentDetails />} />
          
        </Route>

        <Route path="/" element={<Navigate to="/login-Page" replace />} />
        <Route path="/login-Page" element={<LoginPage />} />
        <Route path="/signin-Page" element={<SignInPage />} />
        <Route path="/lockerEntry" element={<LockerEntry />} />
        <Route path="/enterCode" element={<EnterCode />} />
        <Route path="/QRCode" element={<QRScanning />} />
        <Route path="/locker-size" element={<LockerSize />} />
      </Routes>
    </>
  );
}

export default App;
