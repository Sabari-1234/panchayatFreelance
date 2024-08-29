import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Upload from "./pages/upload/Upload";
import Layout from "./layout/Layout";
import DB from "./pages/storage/DB";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="upload" element={<Upload />} />
          <Route path="storage" element={<DB />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
