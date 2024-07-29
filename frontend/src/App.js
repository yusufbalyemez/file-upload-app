import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllImages from "./components/AllImages";
import ImageUploader from "./components/ImageUploader";
import Header from "./components/Header";
import Gallery1 from "./components/Gallery1/Gallery1";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<ImageUploader />} />
          <Route path="/gorseller" element={<AllImages />} />
          <Route path="/galeri1" element={<Gallery1/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;