import React from 'react';
import { Outlet, NavLink } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>React Web & Apps</h1>
        <nav>
          <NavLink className={({ isActive }) => isActive ? "red" : "blue"} to="/">Home</NavLink>{" | "}
          <NavLink className={({ isActive }) => isActive ? "red" : "blue"} to="/pokeapi">Pokeapi</NavLink> |{" "}
          <NavLink className={({ isActive }) => isActive ? "red" : "blue"} to="/gallery-classic">Gallery Classic</NavLink>{" | "}
          <NavLink className={({ isActive }) => isActive ? "red" : "blue"} to="/gallery-masonry">Gallery Masonry</NavLink>{" | "}
          <NavLink className={({ isActive }) => isActive ? "red" : "blue"} to="/gallery-feed">Gallery Feed</NavLink>{" | "}
          <NavLink className={({ isActive }) => isActive ? "red" : "blue"} to="/gallery-horizontal">Gallery Horizontal</NavLink>{" | "}
          <NavLink className={({ isActive }) => isActive ? "red" : "blue"} to="/eshop">Eshop</NavLink>
        </nav>
      </header>
      <section>
       <Outlet />
      </section>
      <footer>
      <p>
          Created with React © 2023.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </footer>
    </div>
  );
}

export default App;
