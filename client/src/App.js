import './App.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <BrowserRouter>
      {/* Navigation */}
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="*" element={<ErrorPage/>}/>

      </Routes>
      {/* Footer */}
    </BrowserRouter>
  );
}

export default App;
