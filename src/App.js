import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import VideoPage from './Pages/VideoPage/VideoPage';

function App() {
  return (
    <div>
      
      <Routes>
        <Route to="/" element={<Home></Home>}></Route>
        <Route to='/cinematography' element={<VideoPage></VideoPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
