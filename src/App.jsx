import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Favourites from "./pages/favourites";
import NavBar from "./Components/navbar";
import "./css/App.css";
import { MovieProvider } from "./contexts/MovieContext";

function App() {
  return (
    <MovieProvider>
      <div className="app-container">
        <NavBar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favourites" element={<Favourites />} />
          </Routes>
        </main>
      </div>
    </MovieProvider>
  );
}

export default App;
