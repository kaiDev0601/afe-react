import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserDashboard from './components/user/UserDashboard';
import UserProfile from './components/user/UserProfile';
import UserAfeRequestShow from './components/user/UserAfeRequestShow';

import ApprovalDashboard from './components/approval/ApprovalDashboard';


import './App.css';
import UserAddAfeRequest from './components/user/UserAddAfeRequest';
import ApprovalAfeRequestShow from './components/approval/ApprovalAfeRequestShow';
import ApprovalAddAfeRequest from './components/approval/ApprovalAddAfeRequest';
import AdminDashboard from './components/admin/AdminDashboard';
import AdminAfeRequestShow from './components/admin/AdminAfeRequestShow';
import AdminAddAfeRequest from './components/admin/AdminAddAfeRequest';
import Login from './components/Login';
import AdminUsersShow from './components/admin/AdminUsersShow';
import SuperDashboard from './components/super/SuperDashboard';
import SuperAfeRequestShow from './components/super/SuperAfeRequestShow';
import SuperAddAfeRequest from './components/super/SuperAddAfeRequest';
import SuperUsersShow from './components/super/SuperUsersShow';
import SuperSettings from './components/super/SuperSettings';

import { Provider } from 'react-redux';
import store from './store';

function App() {

  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/user/dashboard" element={<UserDashboard />}></Route>
          <Route path="/user/profile" element={<UserProfile />}></Route>
          <Route path="/user/afe_request_show" element={<UserAfeRequestShow />}></Route>
          <Route path="/user/add_afe_request" element={<UserAddAfeRequest />}></Route>

          <Route path="/approval/dashboard" element={<ApprovalDashboard />}></Route>
          <Route path="/approval/afe_request_show" element={<ApprovalAfeRequestShow />}></Route>
          <Route path="/approval/add_afe_request" element={<ApprovalAddAfeRequest />}></Route>

          <Route path="/admin/dashboard" element={<AdminDashboard />}></Route>
          <Route path="/admin/afe_request_show" element={<AdminAfeRequestShow />}></Route>
          <Route path="/admin/add_afe_request" element={<AdminAddAfeRequest />}></Route>
          <Route path="/admin/users_show" element={<AdminUsersShow />}></Route>
        
          <Route path="/super/dashboard" element={<SuperDashboard />}></Route>
          <Route path="/super/afe_request_show" element={<SuperAfeRequestShow />}></Route>
          <Route path="/super/add_afe_request" element={<SuperAddAfeRequest />}></Route>
          <Route path="/super/users_show" element={<SuperUsersShow />}></Route>
          <Route path="/super/settings" element={<SuperSettings />}></Route>

        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
