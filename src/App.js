import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import { Suspense, lazy } from 'react';
import Memories from "./pages/Memories/Memories";
import Home from "./pages/Home/Home";
import DayLoveCount from './pages/DayLoveCount/DayLoveCount';
import Travel from './pages/Travel/Travel';
import Layout from "./components/Layout";

function App() {
  return (
    <Layout>
      <>
        <Router>
          <Navbar />
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Memories" element={<Memories />} />
            <Route path="DayLoveCount" element={<DayLoveCount />} />
            <Route path="Travel" element={<Travel />} />
          </Routes>
        </Router>
      </>
    </Layout>
  );
}

export default App; 