import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import WeddingsPage from "./pages/weddings";
import CorporatePage from "./pages/corporate";
import 5QuestionsPage from "./pages/5-questions";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/weddings" element={<WeddingsPage />} />
      <Route path="/corporate" element={<CorporatePage />} />
      <Route path="/5-questions" element={<5QuestionsPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
