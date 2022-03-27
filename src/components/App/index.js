import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "../Header";
import AllMovies from "../AllMovies";
import Movie from "../Movie";
import Session from "../Session";

export default function App() {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<AllMovies />} />
            <Route path="/filme/:movieId" element={<Movie />} />
            <Route path="/sessao/:sessionId" element={<Session />} />
        </Routes>
    </BrowserRouter>
  );
}