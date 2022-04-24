import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import VideoPage from './Pages/VideoPage/VideoPage';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path='/cinematography' element={<VideoPage></VideoPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
