import React, { useState } from "react";

const BestActressNomineesInSecondPlan = ({ nominees }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const nomineeSlideStyles = {
    display: "flex",
    justifyContent: "center",
    overflow: "hidden",
  };

  const grayscaleImageStyle = {
    filter: "grayscale(100%)",
    width: "160px",
    transition: "transform 0.5s ease",
  };

  const coloredImageStyle = {
    filter: "none",
    transform: "translateY(-15px)",
  };
  return (
    <div>
      <h3
        style={{
          fontSize: "15px",
          lineHeight: "1.47",
          color: "#b7a261",
          textTransform: "uppercase",
          fontWeight: 600,
          marginLeft: "-50%",
        }}
      >
        Лучшая женская роль второго плана
      </h3>
      <div style={nomineeSlideStyles}>
        {nominees.map((actress2, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              width: "15%",
            }}
          >
            <img
              style={{
                ...grayscaleImageStyle,
                ...(hoveredIndex === index && coloredImageStyle),
              }}
              src={actress2.image}
              alt=""
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            />
            <p
              className="actor-name"
              style={{ color: "white", fontSize: "16px" }}
            >
              {actress2.name}
            </p>
            <p
              className="actor-movie"
              style={{
                color: "rgba(255, 255, 255, 0.5)",
                fontSize: "16px",
                marginTop: "-10px",
              }}
            >
              {actress2.movie}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestActressNomineesInSecondPlan;
