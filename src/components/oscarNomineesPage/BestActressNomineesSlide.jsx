import React from "react";

const BestActressNomineesSlide = ({ nominees }) => {
  const nomineeSlideStyles = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
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
        }}
      >
        Лучшая женская роль
      </h3>
      <div style={nomineeSlideStyles}>
        {nominees.map((actress, index) => (
          <div key={index}>
            <img width="150px" src={actress.image} alt="" />
            <p className="actor-name">{actress.name}</p>
            <p className="actor-movie">{actress.movie}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default BestActressNomineesSlide;
