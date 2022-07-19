import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Main from './components/Main';
import { AnimatePresence } from 'framer-motion';
import ImageExample from './components/ImageExample'

function App() {
  const location = useLocation();

  return (
    <>
       <AnimatePresence initial={false} exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Main />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
