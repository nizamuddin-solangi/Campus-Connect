import React, { useState, useEffect } from "react";
import eventData from "../data/event-page.json";
import "../css/EventCalendar.css";

const EventCalendar = () => {
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  // Filtration
  const [year, setYear] = useState(""); 
  const [category, setCategory] = useState("All"); 
  const [events, setEvents] = useState([]);
  const [years, setYears] = useState([]);

  useEffect(() => {
    setEvents(eventData);

    const uniqueYears = [...new Set(eventData.map(e => e.year))].sort((a, b) => a - b);
    setYears(uniqueYears);

    if (uniqueYears.length > 0) {
      setYear("");
    }
  }, []);

  const filteredEvents = events.filter(e => 
    e.year === parseInt(year) && (category === "All" || e.category === category)
  );

  const eventMap = {};
  filteredEvents.forEach(e => {
    const dateKey = e.date; 
    if (!eventMap[dateKey]) eventMap[dateKey] = [];
    eventMap[dateKey].push(e);
  });

  const generateMonthDays = (month) => {
    const firstDay = new Date(year, month, 1).getDay();
    const numDays = new Date(year, month + 1, 0).getDate();
    const days = [];

    for (let i = 0; i < firstDay; i++) days.push(null);
    for (let i = 1; i <= numDays; i++) days.push(i);
    return days;
  };

  const categories = ["All", ...Array.from(new Set(eventData.map(e => e.category)))];

  return (
    <>
      <div className="event-header">Events Calendar</div>
      <div className="calendar-main">
        <div className="calendar-filters">
          <select
            value={year}
            onChange={e => setYear(e.target.value)}
            onFocus={() => setYear(year || "")}
          >
            {!year && (
              <option value="" disabled hidden>
                Select Year
              </option>
            )}
            {years.map(y => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>

          <div className="category-tabs">
            {categories.map(cat => (
              <button
                key={cat}
                className={`tab-button ${category === cat ? "active" : ""}`}
                onClick={() => setCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="months-grid">
          {months.map((month, mIdx) => {
            const monthDays = generateMonthDays(mIdx);
            return (
              <div className="month-box" key={month}>
                <h3>{month}</h3>
                <div className="weekdays-row">
                  {weekdays.map(d => <div key={d} className="weekday">{d}</div>)}
                </div>
                <div className="days-grid">
                  {monthDays.map((day, idx) => {
                    if (!day) return <div key={idx} className="day-box empty"></div>;

                    const dateKey = `${year}-${String(mIdx+1).padStart(2,"0")}-${String(day).padStart(2,"0")}`;
                    const dayEvents = eventMap[dateKey] || [];

                    return (
                      <div key={idx} className="day-box">
                        {day}
                        {dayEvents.map(ev => (
                          <span
                            key={ev.id}
                            className="event-bullet"
                            style={{ backgroundColor: ev.color }}
                            title={ev.title}
                          ></span>
                        ))}
                      </div>
                    );
                  })}
                </div>

                {filteredEvents.filter(e => new Date(e.date).getMonth() === mIdx).length > 0 && (
                  <div className="month-legend">
                    {filteredEvents.filter(e => new Date(e.date).getMonth() === mIdx).map(ev => (
                      <div key={ev.id} className="legend-item">
                        <span className="event-bullet" style={{ backgroundColor: ev.color }}></span>
                        {ev.title}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default EventCalendar;
