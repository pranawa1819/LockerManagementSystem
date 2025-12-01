import LoginPage from "./components/Authentication/LoginPage";
import { Navigate, Route, Routes } from "react-router-dom";
import SignInPage from "./components/Authentication/SignInPage";
import LockerEntry from "./components/Home/LockerEntry";
import EnterCode from "./components/Home/EnterCode";
import QRScanning from "./components/Home/QRScanning";
function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Navigate to ="/login-Page" replace />}
        />
        <Route path="/login-Page" element={<LoginPage />} />
        <Route path="/signin-Page" element={<SignInPage />} />
        <Route path="/lockerEntry" element={<LockerEntry />} />
        <Route path="/enterCode" element={<EnterCode />} />
        <Route path="/QRCode" element={<QRScanning/>} />
      </Routes>
    </>
  );
}

export default App;
