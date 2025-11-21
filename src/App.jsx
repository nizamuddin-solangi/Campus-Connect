import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import AboutSection from "./components/About-section";
import EventCards from "./components/UpcomingEvents";
import MemorableEvents from "./components/MemorableEvents";
import Events from "./components/Events";
import Event_details from "./components/Event_details";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Feedback from "./components/Feedback";
import EventCalendar from "./components/EventCalendar";gi
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
            <>
              <Banner />
              <AboutSection />
              <EventCards />
              <MemorableEvents />
            </>
          }/>
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/eventcalendar" element={<EventCalendar />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<Event_details />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
