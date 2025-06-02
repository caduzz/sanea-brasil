import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../pages/home";
import { Submission } from "../pages/submission";
import { Programming } from "../pages/programming";
import { DataLocal } from "../pages/data";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/submission" element={<Submission />} />
        <Route path="/programming" element={<Programming />} />
        <Route path="/local" element={<DataLocal />} />
      </Routes>
    </Router>
  );
}


export default AppRoutes;