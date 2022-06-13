import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Header from './components/layout/Header';
import Landing from './components/Landing';
import UserDashboard from './components/user/UserDashboard';
import UserProfile from './components/user/UserProfile';
import UserAfeRequestShow from './components/user/UserAfeRequestShow';


import './App.css';
import UserAddAfeRequest from './components/user/UserAddAfeRequest';

function App() {

  return (
    <Router>
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <Navbar></Navbar>
          <div className="col-md-9 col-xl-10 page-container">
            <Header></Header>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/user/dashboard" element={<UserDashboard />}></Route>
              <Route path="/user/profile" element={<UserProfile />}></Route>
              <Route path="/user/afe_request_show" element={<UserAfeRequestShow />}></Route>
              <Route path="/user/add_afe_request" element={<UserAddAfeRequest />}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
