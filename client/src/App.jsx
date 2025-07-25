import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './routes/Router';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="pt-16"> {/* To offset fixed navbar height */}
        <AppRouter />
      </div>
    </BrowserRouter>
  );
}

export default App;
