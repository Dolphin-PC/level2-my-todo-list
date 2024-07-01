import MainPage from "@/components/pages/MainPage";
import Layout from "./components/atom/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailPage from "./components/pages/DetailPage";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/:id" element={<DetailPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
