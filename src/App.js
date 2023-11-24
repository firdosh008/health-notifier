import Login from './Pages/Login/Login';
import Signup from './Pages/signup/Signup';
import {Routes, Route} from 'react-router-dom';
import Dashboard from './Pages/dashboard/Dashboard';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </div>
  );
}

export default App;
