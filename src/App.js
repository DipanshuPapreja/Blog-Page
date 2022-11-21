import logo from './logo.svg';
import './App.css';
import MainLogo from './Components/Project/MainLogo';
import Navbar from './Components/Project/Navbar';
import styles from './Components/Project/style.module.css';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Project/Home';
import MainPage from './Components/Project/Bollywood/MainPage';
import MainHollywood from './Components/Project/Hollywood/MainHollywood';
import MainTechnology from './Components/Project/Technology/MainTechnology';
import MainFood from './Components/Project/Food/MainFood';
import MainFitness from './Components/Project/Fitness/MainFitness';
function App() {
  return (

    <div className="App">
      <div className={styles.container}>
          <MainLogo />
          <Navbar />
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/home' element={<Home />} />
            <Route path='/bollywood' element={<MainPage/>}/>
            <Route path='/technology' element={<MainTechnology/>}/>
            <Route path='/hollywood' element={<MainHollywood/>}/>
            <Route path='/fitness' element={<MainFitness/>}/>
            <Route path='/food' element={<MainFood/>}/>
          </Routes>
      </div>
    </div>
  );
}

export default App;
