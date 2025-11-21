import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import eventData from "../data/event-page.json";
import "../css/events.css";

function Events() {
  const [events, setEvents] = useState([]);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [hearts, setHearts] = useState({});

  //Bookmark
  useEffect(() => {
    setEvents(eventData);

    const savedHearts = localStorage.getItem("eventHearts");
    if (savedHearts) {
      setHearts(JSON.parse(savedHearts));
    }
  }, []);

  const toggleHeart = (id) => {
    setHearts((prev) => {
      const updated = { ...prev, [id]: !prev[id] };
      localStorage.setItem("eventHearts", JSON.stringify(updated));
      return updated;
    });
  };

  const filteredEvents = events.filter((e) => {
    const matchCategory = filter === "All" || e.category === filter;
    const matchSearch = e.title.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  const sortedEvents = [...filteredEvents].sort((a, b) => {
    if (sort === "az") return a.title.localeCompare(b.title);
    if (sort === "za") return b.title.localeCompare(a.title);
    if (sort === "year") return b.year - a.year;
    return 0;
  });

  const categories = [
    "All",
    "Academic Events",
    "Cultural Events",
    "Sports Events",
    "Departmental Events",
  ];

  return (
    <>
      <div className="event-header">Events</div>

      {/* Filter  */}
      <div className="container py-5">
        <div className="event-tabs mb-4">
          {categories.map((cat, i) => (
            <span
              key={i}
              className={`event-tab ${filter === cat ? "active" : ""}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </span>
          ))}
        </div>

        <div className="d-flex justify-content-center gap-3 mb-4 flex-wrap">
          <input
            type="text"
            placeholder="Search by title..."
            className="form-control w-auto"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="form-select w-auto"
          >
            <option value="" hidden>
              Sort by
            </option>
            <option value="az">A → Z</option>
            <option value="za">Z → A</option>
            <option value="year">Newest Year</option>
          </select>
        </div>

        <div className="row g-4">
          {sortedEvents.length > 0 ? (
            sortedEvents.map((event) => (
              <div
                className="col-12 col-sm-6 col-md-4 col-lg-3"
                key={event.id}
              >
                <Link
                  to={`/events/${event.id}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <div className="card h-100 shadow event-card">
                    <div className="event-img-wrapper">
                      <img
                        src={event.image}
                        className="card-img-top"
                        alt={event.title}
                      />
                      <span
                        className={`heart-icon ${
                          hearts[event.id] ? "active" : ""
                        }`}
                        onClick={(e) => {
                          e.preventDefault(); 
                          toggleHeart(event.id);
                        }}
                      ></span>
                    </div>
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">{event.title}</h5>
                      <p className="card-text flex-grow-1">
                        {event.description}
                      </p>
                      <span
                        className="badge event-badge"
                        style={{ backgroundColor: event.color || "#0b003d" }}
                      >
                        {event.category}
                      </span>
                      <small className="text-muted mt-2">
                        Date:{" "}
                        {new Date(event.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}{" "}
                        | Year: {event.year} | Venue: {event.venue}
                      </small>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <p className="text-center">No event found</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Events;