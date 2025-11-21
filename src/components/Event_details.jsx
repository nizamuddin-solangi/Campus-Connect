import { useParams, Link } from "react-router-dom";
import eventData from "../data/event-page.json";
import "../css/event_details.css";

function Event_details() {
  const { id } = useParams();
  const event = eventData.find(e => e.id === id);

  if (!event) return <p className="text-center py-5">Event not found</p>;

  return (
    <div className="container py-5">
      <Link to="/events" className="back-link">
        &larr; Back to Events
      </Link>

      <div className="card mt-3 shadow event-detail-card">
        <img src={event.image} className="card-img-top" alt={event.title} />
        <div className="card-body">
          <h2 className="card-title">{event.title}</h2>
          <p className="card-text">{event.description}</p>
          <span className="badge event-badge" style={{ backgroundColor: event.color }}>
            {event.category}
          </span>
          <p className="mt-3">
            Date: {new Date(event.date).toLocaleDateString()} <br />
            Year: {event.year} <br />
            Venue: {event.venue}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Event_details;
