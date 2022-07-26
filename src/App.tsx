
import Nav from "./components/navigation/Nav";
import { Routes, Route } from "react-router-dom";
import AllHeroes from "./pages/AllHeroes";
import TrendingHeroes from "./pages/TrendingHeroes";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import PublicMatches from "./pages/PublicMatches";
import ProMatches from "./pages/ProMatches";
import Hero from "./pages/Hero";

function App() {
  return (
    
    <main className="App  h-auto w-full flex flex-col flex-1 min-h-full">
      <Nav />
      <section className="h-full flex flex-grow ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/public-matches" element={<PublicMatches />} />
          <Route path="/heroes/all" element={<AllHeroes />} />
          <Route path="/heroes/trending" element={<TrendingHeroes />} />
          <Route path="/heroes/:id" element={<Hero />} />
          <Route path="/pro-matches" element={<ProMatches />} />
        </Routes>
      </section>
      <Footer />
    </main>
  );
}

export default App;
