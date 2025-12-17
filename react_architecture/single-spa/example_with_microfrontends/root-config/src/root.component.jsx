import React from "react";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

export default function Root(props) {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/people" element={<PeoplePage />} />
            <Route path="/animals" element={<AnimalsPage />} />
            <Route path="/todolist" element={<TodolistPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

function Navbar() {
  const location = useLocation();

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">Single-SPA Example</div>
      <div className="navbar-links">
        <Link to="/" className={`nav-link ${isActive("/") ? "active" : ""}`}>
          Главная
        </Link>
        <Link
          to="/people"
          className={`nav-link ${isActive("/people") ? "active" : ""}`}
        >
          People
        </Link>
        <Link
          to="/animals"
          className={`nav-link ${isActive("/animals") ? "active" : ""}`}
        >
          Animals
        </Link>
        <Link
          to="/todolist"
          className={`nav-link ${isActive("/todolist") ? "active" : ""}`}
        >
          Todolist
        </Link>
      </div>
    </nav>
  );
}

function HomePage() {
  return (
    <div className="page-container">
      <h1>Добро пожаловать!</h1>
      <p>Это главная страница single-spa приложения.</p>
      <p>Используйте навигацию для перехода к разным микро-приложениям.</p>
    </div>
  );
}

function PeoplePage() {
  return (
    <div className="page-container">
      <h2>People Microfrontend</h2>
      {/* Контейнер для монтирования микрофронтенда */}
      <div 
        id="people-container" 
        style={{ 
          minHeight: '400px',
          border: '1px solid #ddd',
          borderRadius: '8px',
          padding: '20px',
          marginTop: '20px'
        }}
      >
        <div id="people-app"></div>
      </div>
    </div>
  );
}

function AnimalsPage() {
  return (
    <div className="page-container">
      <h2>Animals Microfrontend</h2>
      <div 
        id="animals-container"
        style={{ 
          minHeight: '400px',
          border: '1px solid #ddd',
          borderRadius: '8px',
          padding: '20px',
          marginTop: '20px'
        }}
      >
        <div id="animals-app"></div>
      </div>
    </div>
  );
}


function TodolistPage() {
  return (
    <div className="page-container">
      <h2>Todolist Microfrontend</h2>
      <div 
        id="todolist-container"
        style={{ 
          minHeight: '400px',
          border: '1px solid #ddd',
          borderRadius: '8px',
          padding: '20px',
          marginTop: '20px'
        }}
      >
        <div id="todolist-app"></div>
      </div>
    </div>
  );
}
