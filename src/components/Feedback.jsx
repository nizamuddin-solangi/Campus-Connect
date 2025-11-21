import { useState } from "react";
import "./../css/feedback.css";

function Feedback() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    userType: "",
    rating: 0,
    comments: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    switch (name) {
      case "name":
        setErrors({
          ...errors,
          name: /^[A-Za-z\s]{3,}$/.test(value)
            ? ""
            : "Only letters (min. 3)",
        });
        break;
      case "email":
        setErrors({
          ...errors,
          email: /^[A-Za-z]{3,}[A-Za-z0-9._]*@[A-Za-z0-9.-]+\.[A-Za-z]{1,}$/.test(
            value
          )
            ? ""
            : "Invalid email",
        });
        break;
      case "comments":
        setErrors({
          ...errors,
          comments: value.trim() ? "" : "Comments cannot be empty",
        });
        break;
      default:
        break;
    }
  };

  const handleStarClick = (star) => {
    setFormData({ ...formData, rating: star });
  };
//validation
  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;

    if (!/^[A-Za-z\s]{3,}$/.test(formData.name)) valid = false;
    if (!/^[A-Za-z]{3,}[A-Za-z0-9._]*@[A-Za-z0-9.-]+\.[A-Za-z]{1,}$/.test(formData.email))
      valid = false;
    if (!formData.comments.trim()) valid = false;
    if (!formData.rating) valid = false;

    if (valid) {
      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        userType: "",
        rating: 0,
        comments: "",
      });
      setErrors({});
      setTimeout(() => setSuccess(false), 5000);
    }
  };

  return (
    <>
      <div className="gallery-header">Feedback</div>

      <div className="feedback-wrapper">
        <div className="feedback-card">
          <div className="feedback-visual">
            <div className="feedback-overlay">
              <h2>“Your voice shapes our excellence.”</h2>
              <p>
                Every review helps us grow, improve, and deliver a better experience.
              </p>
              <div className="visual-stars">★★★★★</div>
            </div>
          </div>

          <div className="feedback-form">
            <h2>We Value Your Feedback</h2>
            <p className="subtitle">
              Help us improve by sharing your experience and ideas ✨
            </p>

            {success && (
              <div className="success-msg">
                ✅ Thank you for your valuable feedback!
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="feedback-input">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                {errors.name && <small>{errors.name}</small>}
              </div>

              <div className="feedback-input">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {errors.email && <small>{errors.email}</small>}
              </div>

              <div className="feedback-input">
                <select
                  name="userType"
                  value={formData.userType}
                  onChange={handleChange}
                  required
                >
                  <option value="" hidden>
                    Select User Type
                  </option>
                  <option value="Student">Student</option>
                  <option value="Faculty">Faculty</option>
                  <option value="Visitor">Visitor</option>
                </select>
              </div>

              <div className="feedback-input rating-box">
                <label>Rating:</label>
                <div className="star-rating">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className={formData.rating >= star ? "filled" : ""}
                      onClick={() => handleStarClick(star)}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>

              <div className="feedback-input">
                <textarea
                  name="comments"
                  placeholder="Your comments..."
                  rows="4"
                  value={formData.comments}
                  onChange={handleChange}
                  required
                />
                {errors.comments && <small>{errors.comments}</small>}
              </div>

              <button type="submit">Submit Feedback</button>
            </form>

            <div className="footer-note">
              <p>📩 We review every submission — thank you for helping us improve!</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Feedback;
