import Login from './Pages/Login/login';
import Signup from './Pages/signup/signup';
import Sidebar from './component/sidebar/sidebar';
import Dashboard from './component/dashboard/dashboard';
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
