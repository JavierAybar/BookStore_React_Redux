import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Books from './pages/Books';
import Menu from './components/Menu';
import Categories from './pages/Categories';

function App() {
  return (
    <Router>
      <div className="container-app">
        <Menu />
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
