import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/upcoming_events.css";
import eventsData from "../data/upcoming.json";

function EventCards() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents(eventsData.slice(0, 6)); 
  }, []);

  // Countdown
  const getRemainingTime = (eventDate) => {
    const now = new Date();
    const eventTime = new Date(eventDate);
    const diff = eventTime - now;

    if (diff <= 0) return "Event Started";

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  const [timers, setTimers] = useState({});

  //Filter
  useEffect(() => {
    const initialTimers = {};
    events.forEach((event) => {
      initialTimers[event.id] = getRemainingTime(event.date);
    });
    setTimers(initialTimers);

    const interval = setInterval(() => {
      const updatedTimers = {};
      events.forEach((event) => {
        updatedTimers[event.id] = getRemainingTime(event.date);
      });
      setTimers(updatedTimers);
    }, 1000);

    return () => clearInterval(interval);
  }, [events]);

  return (
    <div className="container my-5">
      <h2 className="events-title">Upcoming Events</h2>

      <div className="row g-4">
        {events.map((event, index) => (
          <div key={event.id} className="col-sm-6 col-md-4">
            <Link to={`/events/${event.id}`} className="card-link">
              <div
                className="memorable-card"
                style={{ animationDelay: `${index * 0.18}s` }}
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="card-img"
                />
                <h5 className="card-title">{event.title}</h5>
                <p className="card-text">{event.description}</p>
                <p className="event-timer">
                  ⏱ {timers[event.id] || "Calculating..."}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventCards;
