import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Routes>
        {/* You can define routes here if needed */}
        {/* <Route path="/" element={<Home />} /> */}
      </Routes>
    </>
  );
}

export default App;
