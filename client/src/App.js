import './App.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ErrorPage from './pages/ErrorPage';
import AddCourse from './components/Courses/AddCourse';
import CourseList from './components/Courses/CourseList';
import GradesPage from './pages/GradesPage';
import Navigation from './components/Navigation/Navigation';
import CourseDetails from './components/Courses/CourseDetails';


function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/home" element={<HomePage />} />
        <Route path="/addCourse" element={<AddCourse />} />
        <Route path="/courses" element={<CourseList />} />
        <Route path="/grades" element={<GradesPage/>}/>
      <Route path="/courses/:courseId" element={<CourseDetails/>}></Route>
        <Route path="*" element={<ErrorPage />} />

      </Routes>
      {/* Footer */}
    </BrowserRouter>
  );
}

export default App;
