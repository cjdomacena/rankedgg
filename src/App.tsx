import Nav from "./components/navigation/Nav";
import { Routes, Route } from "react-router-dom";
import AllHeroes from "./pages/AllHeroes";
import TrendingHeroes from "./pages/TrendingHeroes";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import PublicMatches from "./pages/PublicMatches";
import ProMatches from "./pages/ProMatches";
import Hero from "./pages/Hero";
import { useHeroAbilities } from "./api";
import Match from "./pages/Match";

function App() {
  const {} = useHeroAbilities();
  return (
    <main className="App  h-auto w-full flex flex-col flex-1 min-h-screen relative">
      <Nav />
      <section className="h-full flex flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/matches/public" element={<PublicMatches />} />
          <Route path="/matches/professional" element={<ProMatches />} />
          <Route path="/heroes/all" element={<AllHeroes />} />
          <Route path="/heroes/trending" element={<TrendingHeroes />} />
          <Route path="/heroes/:id" element={<Hero />} />
          <Route path="/matches/:id" element={<Match />} />
        </Routes>
      </section>
      <Footer />
    </main>
  );
}

export default App;
