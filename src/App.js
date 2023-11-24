import Login from './Pages/Login/Login';
import Signup from './Pages/signup/Signup';
import Sidebar from './component/sidebar/Sidebar';
import Dashboard from './component/dashboard/Dashboard';
import {Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/dashboard" element={<><Sidebar/><Dashboard/></>}/>
      </Routes>
    </div>
  );
}

export default App;
