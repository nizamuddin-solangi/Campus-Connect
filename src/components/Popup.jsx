import { useState } from "react";
import popupData from "../data/popupData.json";
import "./../css/popus.css";

export default function Popup({ onSubmit }) {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && role) onSubmit({ name, role });
  };

  return (
    <div className="popup-overlay">
      <div className="popup-card">
        <h2>{popupData.message}</h2>
        <form onSubmit={handleSubmit}>
          <select value={role} onChange={(e) => setRole(e.target.value)} required>
            <option value="" hidden>Select your role</option>
            {popupData.options.map((opt, i) => (
              <option key={i} value={opt}>{opt}</option>
            ))}
          </select>

          <input
            type="text" 
            placeholder={popupData.placeholder}
            value={name}
            onChange={(e) => {  
            const val = e.target.value.replace(/[0-9]/g, "");
            setName(val);
          }}
            required
          />

          <button type="submit">{popupData.buttonText}</button>
        </form>
      </div>
    </div>
  );
}
