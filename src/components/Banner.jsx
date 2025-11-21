import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import bannerData from "../data/banner.json";
import Popup from "./Popup";
import "./../css/banner.css";

// Input Data
function Banner() {
  const [user, setUser] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const location = useLocation(); 

  useEffect(() => {
    if (location.pathname === "/") {
      setShowPopup(true); 
    }
  }, [location.pathname]);

  const handlePopupSubmit = ({ name, role }) => {
    setUser({ name, role });
    setShowPopup(false); 
  };

  return (
    <section className="banner">
      {showPopup && <Popup onSubmit={handlePopupSubmit} />}
      
      <div className="banner-overlay"></div>
      <img src={bannerData.image} alt={bannerData.alt} className="banner-img" />

      <div className="banner-content">
        <h1>
          {user
            ? `Welcome ${user.role} ${user.name}`
            : bannerData.title}{" "}
          <span>{bannerData.highlight}</span>
        </h1>
        <p>{bannerData.subtitle}</p>
        <Link to={bannerData.button.link} className="banner-btn">
        {bannerData.button.text}
        </Link>

      </div>
    </section>
  );
}

export default Banner;
