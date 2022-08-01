import Nav from "./components/navigation/Nav";
import { Route } from "react-router-dom";
import AllHeroes from "./pages/AllHeroes";
import TrendingHeroes from "./pages/TrendingHeroes";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import PublicMatches from "./pages/PublicMatches";
import ProMatches from "./pages/ProMatches";
import Hero from "./pages/Hero";
import { useHeroAbilities } from "./api";
import Match from "./pages/Match";
import PageNotFound from "./pages/404";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/Utilility/Fallback";
import { SentryRoutes } from "./main";
import * as Sentry from "@sentry/react";

function App() {
  const {} = useHeroAbilities();
  return (
    <Sentry.ErrorBoundary fallback={({ resetError }) => <ErrorFallback resetError={resetError} />}>
      <main className="App  h-auto w-full flex flex-col flex-1 min-h-screen relative">
        <Nav />

        <section className="h-full flex flex-grow">
          <SentryRoutes>
            <Route path="/" element={<Home />} />
            <Route path="/matches/public" element={<PublicMatches />} />
            <Route path="/matches/professional" element={<ProMatches />} />
            <Route path="/heroes/all" element={<AllHeroes />} />
            <Route path="/heroes/trending" element={<TrendingHeroes />} />
            <Route path="/heroes/:id" element={<Hero />} />
            <Route path="/matches/professional/:id" element={<Match />} />
            <Route path="*" element={<PageNotFound />} />
          </SentryRoutes>
        </section>

        <Footer />
      </main>
    </Sentry.ErrorBoundary>
  );
}

export default App;
