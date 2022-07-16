import logo from './logo.svg';
import './App.css';
import { Routes, Route,useLocation } from 'react-router-dom';
import Main from './components/Main';
import Sub from './components/Sub';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();

  const imageDetails = {
    width: 424,
    height: 550,
  };

  return (
    <>
       <AnimatePresence initial={false} exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Main imageDetails={imageDetails} />} />
          <Route path='/:id' element={<Sub imageDetails={imageDetails} />}/>   
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
