import React from "react";

const BestActorsNomineeSlide = ({ nominees }) => {
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
          textAlign: "left",
        }}
      >
        Лучшая мужская роль
      </h3>
      <div style={nomineeSlideStyles}>
        {nominees.map((actor, index) => (
          <div style={{ display: "inline-block", gap: "10px" }} key={index}>
            <img style={{ width: "150px" }} src={actor.image} alt="" />
            <p className="actor-name">{actor.name}</p>
            <p className="actor-movie">{actor.movie}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default BestActorsNomineeSlide;
