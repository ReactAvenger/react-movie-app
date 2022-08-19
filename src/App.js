import "./styles.css";
import React from "react";
import Header from "./components/Header";
import Main from "./pages/Main";
import Footer from "./components/Footer";
import { Routes, Route } from 'react-router-dom';
import Movie from "./pages/Movie";

export default function App() {
  return (
    <>
      <Header />
      <Routes >
        <Route path="/" element={<Main />} />
        <Route path="/movie/:movieId" element={<Movie />} />
      </Routes>
      <Footer />
    </>
  );
}
