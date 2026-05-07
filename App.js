import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Home = () => {
  const [name, setName] = useState('');

  return (
    <div>
      <h2>Home - Live Input</h2>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Your name: <strong>{name || 'Not entered'}</strong></p>
    </div>
  );
};

const About = () => <div><h2>About Page</h2><p>About content</p></div>;
const Contact = () => <div><h2>Contact Page</h2><p>Contact content</p></div>;

function App() {
  return (
    <Router>
      <div style={{ padding: '20px' }}>
        <h1>Set 3</h1>
        <nav>
          <Link to="/" style={{ margin: '10px' }}>Home</Link>
          <Link to="/about" style={{ margin: '10px' }}>About</Link>
          <Link to="/contact" style={{ margin: '10px' }}>Contact</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;