import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

function Home() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };
  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <div>
      <h1>Welcome to the Home page!</h1>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <p>
        Click <Link to="/about">here</Link> to go to the About page.
      </p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>About Us</h1>
      <p>This is the About page.</p>
      <p>
        Click <Link to="/">here</Link> to go back to the Home page.
      </p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Hello, Single SPA with React!</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <p>
        Click <Link to="/about">here</Link> to go to About page
      </p>
    </div>
  );
}

export default App;
