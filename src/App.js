import Login from './Pages/Login/Login';
import Signup from './Pages/signup/Signup';
import Sidebar from './component/sidebar/Sidebar';
import Dashboard from './component/dashboard/Dashboard';
import Navbar from './component/navbar/Navbar'
import {Routes, Route} from 'react-router-dom';
import Form from './component/form/Form';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/dashboard" element={<><Navbar/><Sidebar/><Dashboard/></>}/>
        <Route path="/form" element={<Form/>}/>
      </Routes>
    </div>
  );
}

export default App;
