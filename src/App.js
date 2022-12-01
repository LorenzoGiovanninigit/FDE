import "./App.css";

import { Routes, Route, Outlet, Link } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";

//importing components
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import logo from "./logo.png";
import ChiSiamo from "./components/ChiSiamo/ChiSiamo";
import Contatti from "./components/Contatti";
import Servizi from "./components/Servizi";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Body />} />
          <Route path="chiSiamo" element={<ChiSiamo />} />
          <Route path="Servizi" element={<Servizi />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <>
      {
        <div className="header">
          <img src={logo} alt={"Logo"} />
          <ul>
            <li className="listItem">
              <Link className="link" to="/">
                Home
              </Link>
            </li>
            <li className="listItem">
              <Link to="chiSiamo" className="link">
                Chi Siamo
              </Link>
            </li>
            <li className="listItem">
              <Link to="Servizi" className="link">
                Servizi
              </Link>
            </li>
            <li className="listItem">
              <Contatti />
            </li>
          </ul>
        </div>
      }
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
