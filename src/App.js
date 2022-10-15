import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './sb-admin-2.min.css'
import Topbar from './Topbar';
import Dashboard from './Dashboard';
import Users from './Users';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div id="wrapper">
      <Sidebar/>
      <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <Topbar/>
        <Routes>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/Users' element={<Users/>}></Route>
        </Routes>
      </div>
      </div>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
