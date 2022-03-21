import './App.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ErrorPage from './pages/ErrorPage';
import AddCourse from './components/AddCourse';
import CourseList from './components/Courses/CourseList';
import Navigation from './components/Navigation/Navigation';
import CourseDetails from './components/Courses/CourseDetails';

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/home" element={<HomePage />} />
        <Route path="/addCourse" element={<AddCourse />} />
        <Route path="courses" element={<CourseList/>}/>
      <Route path="/courseDetails" element={<CourseDetails/>}></Route>
        <Route path="*" element={<ErrorPage />} />

      </Routes>
      {/* Footer */}
    </BrowserRouter>
  );
}

export default App;
