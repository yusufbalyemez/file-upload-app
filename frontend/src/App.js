import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllImages from "./components/AllImages";
import ImageUploader from "./components/ImageUploader";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<ImageUploader />} />
          <Route path="/gorseller" element={<AllImages />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;