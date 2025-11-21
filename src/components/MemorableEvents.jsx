import { useEffect, useState } from "react";
import eventsData from "../data/memorableEvents.json";
import "../css/memorableEvents.css";

function MemorableEvents() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents(eventsData);
  }, []);

  return (
    <div className="container my-5">
      <h2 className="events-title">Memorable Events</h2>
      <div className="row g-4">
        {events.map((event, index) => (
          <div key={event.id} className="col-sm-6 col-md-4">
            <div
              className="memorable-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <img
                src={event.image}
                alt={event.title}
                className="card-img"
              />
              <h5 className="card-title">{event.title}</h5>
              <p className="card-text">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MemorableEvents;
