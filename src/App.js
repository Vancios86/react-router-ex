import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home, About, Events, Contact, Oups404, Services } from "./pages";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="services" element={<Services />} />
        </Route>
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Oups404 />} />
      </Routes>
    </div>
  );
}

export default App;
