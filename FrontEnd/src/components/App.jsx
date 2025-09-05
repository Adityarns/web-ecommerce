import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import Cart from "../pages/Cart/Cart";

export default function App() {
  return (
    <Router className="justify-center text-center sm:pt-10">
      <Layout>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/Menu" element={<Menu></Menu>}></Route>
          <Route path="/Cart" element={<Cart></Cart>}></Route>
        </Routes>
      </Layout>
    </Router>
  );
}
