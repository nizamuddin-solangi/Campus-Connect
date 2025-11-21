import { useState, useEffect } from "react";
import galleryData from "../data/galleryData.json";
import "../css/gallery.css";

function Gallery() {
  const [images, setImages] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [yearFilter, setYearFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [lightbox, setLightbox] = useState({ open: false, src: "", title: "" });
  const [bookmarks, setBookmarks] = useState({});

  //Filteration
  const categories = ["All", "Technical", "Cultural", "Sports", "Academic"];
  const years = ["All", "2022-23", "2023-24"];

  useEffect(() => {
    setImages(galleryData);

    const saved = localStorage.getItem("galleryBookmarks");
    if (saved) {
      setBookmarks(JSON.parse(saved));
    }
  }, []);

  const toggleBookmark = (id) => {
    setBookmarks((prev) => {
      const updated = { ...prev, [id]: !prev[id] };
      localStorage.setItem("galleryBookmarks", JSON.stringify(updated));
      return updated;
    });
  };

  const filteredImages = images.filter((img) => {
    const matchCategory =
      categoryFilter === "All" || img.category === categoryFilter;
    const matchYear = yearFilter === "All" || img.year === yearFilter;
    const matchSearch =
      img.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      img.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      img.year.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchYear && matchSearch;
  });

  const openLightbox = (img) => {
    setLightbox({ open: true, src: img.src, title: img.title });
  };

  const closeLightbox = () => {
    setLightbox({ open: false, src: "", title: "" });
  };

  return (
    <>
      <div className="gallery-header">Gallery</div>

      <div className="gallery-wrapper container py-5">
        <div className="filters mb-4">
          <div className="category-tabs mb-3">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`tab-button ${
                  categoryFilter === cat ? "active" : ""
                }`}
                onClick={() => setCategoryFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="filter-row">
            <div className="year-dropdown">
              <select
                value={yearFilter}
                onChange={(e) => setYearFilter(e.target.value)}
                className="year-select"
              >
                {years.map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
              </select>
            </div>

            <input
              type="text"
              placeholder="Search by title, category, or year..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>
        </div>

        <div className="gallery-grid">
          {filteredImages.length > 0 ? (
            filteredImages.map((img) => (
              <div key={img.id} className="gallery-card">
                <div className="gallery-img-wrapper">
                  <img
                    src={img.src}
                    alt={img.title}
                    className="gallery-img"
                    onClick={() => openLightbox(img)}
                  />
                  <span
                    className={`heart-icon ${
                      bookmarks[img.id] ? "active" : ""
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleBookmark(img.id);
                    }}
                  ></span>
                </div>
                <div className="gallery-info">
                  <h5>{img.title}</h5>
                  {img.description && <p>{img.description}</p>}
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">No images found.</p>
          )}
        </div>
      </div>

      {lightbox.open && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.title} />
            <p className="lightbox-title">{lightbox.title}</p>
            <span className="lightbox-close" onClick={closeLightbox}>
              &times;
            </span>
          </div>
        </div>
      )}
    </>
  );
}

export default Gallery;
