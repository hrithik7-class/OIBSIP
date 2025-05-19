import { Route,Routes, } from 'react-router-dom';
import Login from './pages/Login';

import Registration from './pages/Registration';
import { Home } from './pages/Home';

function App() {
  return (
    <>
    
      <Routes>
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<Login/>} />
        <Route path="/home" element={< Home/>}/>
      </Routes>
      </>
    
  );
}

export default App;