import aboutData from "../data/about.json";
import "./../css/about-section.css";

function AboutSection() {
  const { mainsec } = aboutData;

  return (
    <section className="about-wrapper home-about">
      <div className="about">About Our Campus<br/></div>
      <div className="about-smry">Our college was founded with the vision to empower students with knowledge, skills, and values that prepare them for a bright future. Over the years, we have achieved excellence in academics, sports, and cultural activities.</div>

      <div className="about-sides">
        <div className="about-side1">
          <img
            src={mainsec.src}
            alt={mainsec.alt}
            className="main-img"
          />
        </div>
        <div className="about-side2">
          <p className="about-text">
            At Aptech MSG, we are dedicated to fostering an environment where curiosity is sparked, knowledge is deepened, and individual potential is realized. For over 25 years, we have proudly served as a cornerstone of academic excellence, committed to delivering a transformative educational experience that prepares students to thrive in a complex and ever-evolving world. 
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
