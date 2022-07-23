
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
      <section className="h-auto flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/public-matches" element={<PublicMatches />} />
          <Route path="/all-heroes" element={<AllHeroes />} />
          <Route path="/trending-heroes" element={<TrendingHeroes />}/>
          <Route path="/pro-matches" element={<ProMatches />} />
          <Route path="/all-heroes/:id" element={<Hero />} />
        </Routes>
      </section>
      <Footer />
    </main>
  );
}

export default App;
