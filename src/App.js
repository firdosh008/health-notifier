import Login from './Pages/Login/login';
import Signup from './Pages/signup/signup';
import Sidebar from './component/sidebar/sidebar';
import Dashboard from './component/dashboard/dashboard';


function App() {
  return (
    <div className="">
      <Login/> 
      <Signup/>
      <Sidebar/>
      <Dashboard/>
    </div>
  );
}

export default App;
