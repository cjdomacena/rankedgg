import { BrowserTracing } from "@sentry/tracing";
import { lazy, Suspense, useEffect } from "react";
import Nav from "./components/navigation/Nav";
import {
  createRoutesFromChildren,
  matchRoutes,
  Route,
  Routes,
  useLocation,
  useNavigationType,
} from "react-router-dom";
import Match from "./pages/Match";
import PageNotFound from "./pages/404";
import ErrorFallback from "./components/Utilility/Fallback";
import * as Sentry from "@sentry/react";
import MatchBreakdown from "./components/Matches/MatchBreakdown";

import Teams from "./pages/Teams";
import TrendingHeroes from "./pages/TrendingHeroes";
import Footer from "./components/Footer";
import PublicMatches from "./pages/PublicMatches";
import ProMatches from "./pages/ProMatches";
import MatchIdNotFound from "./components/Utilility/MatchIdNotFound";
import Team from "./pages/Team";
import { DefaultLoading } from "./components/Utilility/DefaultLoading";
import { HeroStat } from "./pages/HeroStat";
import Hero from "./pages/Hero";
import AllHeroes from "./pages/AllHeroes";

const Home = lazy(() => import("./pages/Home"));

Sentry.init({
  dsn: "https://88722e89f6f9427895ef8e0d9c7b8a06@o1342140.ingest.sentry.io/6615927",
  integrations: [
    new BrowserTracing({
      routingInstrumentation: Sentry.reactRouterV6Instrumentation(
        useEffect,
        useLocation,
        useNavigationType,
        createRoutesFromChildren,
        matchRoutes
      ),
    }),
  ],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 0.2,
});

const SentryRoutes = Sentry.withSentryReactRouterV6Routing(Routes);
function App() {
  return (
    <Sentry.ErrorBoundary
      fallback={({ resetError }) => <ErrorFallback resetError={resetError} />}
    >
      <Suspense fallback={<DefaultLoading />}>
        <main className="App  h-auto w-full flex flex-col flex-1 min-h-screen relative">
          <Nav />
          <section className="h-full flex flex-grow">
            <SentryRoutes>
              <Route path="/" element={<Home />} />
              <Route path="/matches/public" element={<PublicMatches />} />
              <Route path="/matches/professional" element={<ProMatches />} />
              <Route path="/heroes">
                <Route path="all" element={<AllHeroes />} />
                <Route path="trending" element={<TrendingHeroes />} />
                <Route path=":id/" element={<Hero />} />
                <Route path=":id/breakdown" element={<HeroStat />} />
              </Route>
              <Route path="/matches" element={<Match />}>
                <Route path="professional/:id" element={<MatchBreakdown />} />
                <Route path="public/:id" element={<MatchBreakdown />} />
                <Route path=":id" element={<MatchBreakdown />} />
                <Route path="*" element={<MatchIdNotFound matchId={""} />} />
              </Route>
              <Route path="*" element={<PageNotFound />} />
              <Route path="/teams" element={<Teams />} />
              <Route path="/teams/:id" element={<Team />} />
              <Route path="error/:message" element={<PageNotFound />} />
            </SentryRoutes>
          </section>

          <Footer />
        </main>
      </Suspense>
    </Sentry.ErrorBoundary>
  );
}

export default App;
