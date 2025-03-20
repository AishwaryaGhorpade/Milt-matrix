import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/home';
import Miltonians from './pages/miltonians';
import Committee from './pages/committee';
import Activities from './pages/activities';
import Progress from './pages/progress';
import CreateUserForm from "./components/createUserForm";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/miltonians" element={<Miltonians />} />
        <Route path="/committee" element={<Committee />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/addUser" element={<CreateUserForm />} />
      </Routes>
    </>
  );
}

export default App;
