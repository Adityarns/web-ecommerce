import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home/Home";

export default function App() {
  return (
    <Router className="justify-center text-center sm:pt-10">
      <Layout>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route></Route>
        </Routes>
      </Layout>
    </Router>
  );
}
