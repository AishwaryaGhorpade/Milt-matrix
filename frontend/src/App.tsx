import './App.css';
import { SignIn, SignedIn, SignedOut } from "@clerk/clerk-react";
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/home';
import Miltonians from './pages/miltonians';
import Committee from './pages/committee';
import Activities from './pages/activities';
import Progress from './pages/progress';
import CreateUserForm from "./components/createUserForm";
// import ProfilePage from './pages/profile';

function App() {
  return (
    <>
    <SignedOut>
       <SignIn/>
    </SignedOut>
    <SignedIn>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/miltonians" element={<Miltonians />} />
        <Route path="/committee" element={<Committee />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/addUser" element={<CreateUserForm />} />
        {/* <Route path="/miltonians/miltonians/profile/:userId" element={<ProfilePage/>} /> */}

      </Routes>
      </SignedIn>
    </>
  );
}

export default App;
