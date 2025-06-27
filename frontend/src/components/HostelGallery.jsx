import React, { useRef } from "react";
import "./HostelGallery.css";

const HostelGallery = () => {
  const hostels = [
    "Hostel A",
    "Hostel B",
    "Hostel C",
    "Hostel D",
  ];

  const scroll = (ref, direction) => {
    const scrollAmount = 350; // Amount to scroll per click
    if (ref.current) {
      ref.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="hostel-gallery">
      {hostels.map((hostelName, index) => {
        const trackRef = useRef(null);
        const offset = (index % 2 === 0 ? -1 : 1) * 20; // storey layer shift
        return (
          <div
            className="hostel-section"
            key={index}
            style={{ transform: `translateY(${offset}px)` }}
          >
            <h2>{hostelName}</h2>
            <div className="gallery-container">
              <button className="scroll-btn left" onClick={() => scroll(trackRef, "left")}>&lt;</button>
              <div className="image-track focused" ref={trackRef}>
                {[...Array(6)].map((_, i) => (
                  <img
                    key={i}
                    src={`https://picsum.photos/seed/${hostelName.replace(" ", "") + i}/800/600`}
                    alt={`${hostelName} Room ${i}`}
                    className="focus-image"
                  />
                ))}
              </div>
              <button className="scroll-btn right" onClick={() => scroll(trackRef, "right")}>&gt;</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HostelGallery;
