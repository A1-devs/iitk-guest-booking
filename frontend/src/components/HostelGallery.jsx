import React, { useRef } from "react";
import "./HostelGallery.css";

const HostelGallery = () => {
  const hostels = [
    {
      name: "Visitors' Hostel 1",
      images: [
        "https://www.iitk.ac.in/vh/images/slider/slider1.jpg",
        "https://www.iitk.ac.in/vh/images/slider/vh-5.jpg",
        "https://www.iitk.ac.in/vh/images/slider/vh1.jpg",
        "https://www.iitk.ac.in/vh/images/facility/accomodation1.jpg",
        "https://www.iitk.ac.in/vh/images/facility/accomodation.jpg",
      ],
    },
    {
      name: "Hostel 1",
      images: [
        "https://www.iitk.ac.in/hall1/images/img_0578.jpg",
        "https://www.iitk.ac.in/hall1/images/pic02.jpg",
        "https://www.iitk.ac.in/hall1/images/img_0431.jpg",
        "https://picsum.photos/id/1024/800/600",
        "https://picsum.photos/id/1025/800/600",
      ],
    },
    {
      name: "Hostel 3",
      images: [
        "https://hall3iitk.com/images/facilities/guest.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3RfNGyShoZiuJ6T0c13mMKIfXCAt6P4EKhA&s",
        "https://hall3iitk.com/images/facilities/sports.jpg",
        "https://iitk.ac.in/dora/givingback/assets/img/campaign/Hall-III.jpg",
        "https://hall3iitk.com/images/facilities/canteen.jpg",
      ],
    },
    {
      name: "Visitors' Hostel 2",
      images: [
        "https://iitk.ac.in/vh/images/gallery/vh-2/VH-2(IH)%20(11).JPG",
        "https://iitk.ac.in/vh/images/gallery/vh-2/VH-2.JPG",
        "https://iitk.ac.in/vh/images/gallery/vh-2/VH-2(IH)%20(19).JPG",
        "https://iitk.ac.in/vh/images/gallery/vh-2/VH-2(IH)%20(12).JPG",
        "https://iitk.ac.in/vh/images/gallery/vh-2/VH-2(IH)%20(15).JPG",
        "https://iitk.ac.in/vh/images/gallery/vh-2/VH-2(IH)%20(6).JPG",
        "https://iitk.ac.in/vh/images/gallery/vh-2/VH-2(IH)%20(4).JPG"
      ],
    },
  ];

  const scroll = (ref, direction) => {
    const scrollAmount = 350;
    if (ref.current) {
      ref.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="hostel-gallery">
      {hostels.map((hostel, index) => {
        const trackRef = useRef(null);
        const offset = (index % 2 === 0 ? -1 : 1) * 20;
        return (
          <div
            className="hostel-section"
            key={hostel.name}
            style={{ transform: `translateY(${offset}px)` }}
          >
            <h2>{hostel.name}</h2>
            <div className="gallery-container">
              <button className="scroll-btn left" onClick={() => scroll(trackRef, "left")}>&lt;</button>
              <div className="image-track focused" ref={trackRef}>
                {hostel.images.map((url, i) => (
                  <img
                    key={i}
                    src={url}
                    alt={`${hostel.name} Room ${i}`}
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
