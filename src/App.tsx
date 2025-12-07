import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@pages/Home";
import About from "@pages/About";
import NotFound from "@pages/NotFound";
import Projects from "@pages/Projects";
import Layout from "@layouts/MainLayout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
