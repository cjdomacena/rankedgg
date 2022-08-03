import Nav from "./components/navigation/Nav";
import {
  createRoutesFromChildren,
  matchRoutes,
  Route,
  Routes,
  useLocation,
  useNavigationType,
} from "react-router-dom";
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
import ErrorFallback from "./components/Utilility/Fallback";
import * as Sentry from "@sentry/react";
import MatchBreakdown from "./components/Matches/MatchBreakdown";
import { BrowserTracing } from "@sentry/tracing";
import { useEffect } from "react";
import Teams from "./pages/Teams";
import MatchIdNotFound from "./components/Utilility/MatchIdNotFound";


Sentry.init({
  dsn: "https://88722e89f6f9427895ef8e0d9c7b8a06@o1342140.ingest.sentry.io/6615927",
  integrations: [
    new BrowserTracing({
      routingInstrumentation: Sentry.reactRouterV6Instrumentation(
        useEffect,
        useLocation,
        useNavigationType,
        createRoutesFromChildren,
        matchRoutes,
      ),
    }),
  ],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 0.4,
});

const SentryRoutes = Sentry.withSentryReactRouterV6Routing(Routes);
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
            <Route path="/matches" element={<Match />}>
              <Route path="professional/:id" element={<MatchBreakdown />} />
              <Route path="public/:id" element={<MatchBreakdown />} />
              <Route path=":id" element={<MatchBreakdown />} />
              <Route path="*" element={<MatchIdNotFound matchId={""} />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
            <Route path="/teams" element={<Teams />} />
          </SentryRoutes>
        </section>

        <Footer />
      </main>
    </Sentry.ErrorBoundary>
  );
}

export default App;
