import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import NewProject from "./components/pages/NewProject";
import Navbar from "./components/Navbar";
import Container from "./components/layout/Container";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<Home />}> </Route>
          <Route path="/contact" element={<Contact />}> </Route>
          <Route path="/company" element={<Company />}> </Route>
          <Route path="/newproject" element={<NewProject />}> </Route>
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
