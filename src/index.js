import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import Pokeapi from './pokeapi-itnetwork/AppPokeapi';
import GalleryMasonry from './gallery/GalleryMasonry';
import GalleryFeed from './gallery/GalleryFeed';
import GalleryClassic from './gallery/GalleryClassic';
import GalleryHorizontal from './gallery/GalleryHorizontal';
import Eshop from './eshop/AppEshop';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="pokeapi" element={<Pokeapi />} />
        <Route path="gallery-classic" element={<GalleryClassic />} />
        <Route path="gallery-masonry" element={<GalleryMasonry />} />
        <Route path="gallery-feed" element={<GalleryFeed />} />
        <Route path="gallery-horizontal" element={<GalleryHorizontal />} />
        <Route path="eshop" element={<Eshop />} />
      </Route>
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
