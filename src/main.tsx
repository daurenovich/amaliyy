import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Navbar from "./componentes/Navbar.jsx";
import Hero from "./componentes/Hero.jsx";
import Footer from "./componentes/Footer.jsx";
import Brightwoods from "./Componentes-2/Brightwoods.jsx";
import About from "./Componentes-2/About.jsx";
import Reviews from "./Componentes-2/Reviews.jsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <App />
    <Footer />
    <Brightwoods />
    <About />
    <Reviews />
  </React.StrictMode>
);
