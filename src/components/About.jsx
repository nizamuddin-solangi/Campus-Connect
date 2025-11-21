import React from "react";
import aboutData from "../data/about.json";
import "../css/about.css";

function About() {
  const { mainImage, achievements, mission, vision, story, testimonials, annualEvents } = aboutData;

  return (
    <>
      <div className="about-header">{aboutData.title || "About Us"}</div>

      <div className="about-wrapper">
        <div className="about-sides">
          <div className="about-side1">
            <img src={mainImage.src} alt={mainImage.alt} className="main-img" />
          </div>
          <div className="about-side2">
            <p className="about-text">
              Welcome to Aptech MSG, proudly affiliated with Higher Education. Located in the heart of Karachi, our college has built a strong reputation for academic excellence, innovation, and holistic student development. Our campus is recognized for its modern infrastructure, vibrant student life, and a tradition of producing skilled graduates who excel in both academics and professional fields.
            </p>
          </div>
        </div>

        <h2 className="ach-title">Achievements</h2>
        <div className="achievements-grid">
          {achievements.map((ach) => (
            <div key={ach.id} className="ach-card">
              <img src={ach.src} alt={ach.title} className="ach-img" />
              <div className="ach-body">
                <h5>{ach.title}</h5>
                <p>{ach.description}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="section-title">{mission.title}</h2>
        <div className="section-layout">
          
          <div className="section-text">{mission.text}</div>
          <div className="section-img">
            <img src={mission.image} alt={mission.title} />
          </div>
        </div>

        <h2 className="section-title">{vision.title}</h2>
        <div className="section-layout reverse">
          
          <div className="section-img">
            <img src={vision.image} alt={vision.title} />
          </div>
          <div className="section-text">{vision.text}</div>
        </div>

        <h2 className="section-title">{story.title}</h2>
        <div className="section-layout">
          
          <div className="section-text">{story.text}</div>
          <div className="section-img">
            <img src={story.image} alt={story.title} />
          </div>
        </div>

        {annualEvents && annualEvents.length > 0 && (
          <>
            <h2 className="section-title">Annual Events</h2>
            <div className="annual-events-grid">
              {annualEvents.map(ev => (
                <div key={ev.id} className="annual-event-card">
                  <img src={ev.image} alt={ev.title} className="annual-event-img" />
                  <h5 className="annual-event-title">{ev.title}</h5>
                  <p className="annual-event-date">{new Date(ev.date).toLocaleDateString()}</p>
                  <p className="annual-event-desc">{ev.description}</p>
                </div>
              ))}
            </div>
          </>
        )}

        <h2 className="section-title">Team Members</h2>
        <div className="testimonials">
          {testimonials.map((t) => (
            <div key={t.id} className="testimonial-card">
              <img src={t.image} alt={t.author} className="testimonial-img" />
              <p className="testimonial-author">{t.author}</p>
              <p className="testimonial-role">{t.role}</p>
            </div>
          ))}
        </div>

        
      </div>
    </>
  );
}

export default About;
