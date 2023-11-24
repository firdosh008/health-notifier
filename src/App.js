import Login from './Pages/Login/login';
import Signup from './Pages/signup/signup';
import Sidebar from './component/sidebar/sidebar';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/home" element={<Sidebar/>}/>
    </Routes>
    </div>
  );
}

export default App;
