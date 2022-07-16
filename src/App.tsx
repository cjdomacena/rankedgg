
import Nav from "./components/navigation/Nav";
import { Routes, Route } from "react-router-dom";
import AllHeroes from "./pages/AllHeroes";
import TrendingHeroes from "./pages/TrendingHeroes";

function App() {
  return (
    <main className="App  h-full w-screen flex flex-col flex-1">
      <Nav />
      <section className="h-auto flex-grow">
        <Routes>
          <Route path="all-heroes" element={<AllHeroes />} />
          <Route path="trending-heroes" element={<TrendingHeroes />}/>
        </Routes>
      </section>
    </main>
  );
}

export default App;
