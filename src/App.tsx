// App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import WeddingsPage from "./pages/weddings";
import CorporatePage from "./pages/corporate";
import BlogPage from "./pages/blog";
import FiveQuestionsPage from "./pages/5-questions";
import IGRedirect from "./pages/IGRedirect";
import { useAnalytics } from "@/hooks/use-analytics";

// 🔧 This ensures the hook only runs once Router is mounted
const AnalyticsTracker = () => {
  useAnalytics();
  return null;
};

const App = () => {
  return (
    <BrowserRouter>
      <AnalyticsTracker />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/weddings" element={<WeddingsPage />} />
        <Route path="/corporate" element={<CorporatePage />} />
    <Route path="/blog" element={<BlogPage />} />
        <Route path="/5-questions" element={<FiveQuestionsPage />} />
        <Route path="/ig" element={<IGRedirect />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
