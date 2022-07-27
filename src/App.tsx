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
import PageHeaderBG from "./components/Header/PageHeaderBG";

function App() {
  const {} = useHeroAbilities();
  return (
    <main className="App  h-auto w-full flex flex-col flex-1 min-h-full">
      <PageHeaderBG>
        <Nav />
      </PageHeaderBG>
      <section className="h-full flex flex-grow my-8">
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
