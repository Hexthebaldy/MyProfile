
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Post from './pages/Post';
import MainLayout from './components/MainLayout';

function App() {
  return (
    <Router>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<MainLayout />} />
            <Route path="/post/:id" element={<Post />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
