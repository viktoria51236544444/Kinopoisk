import React from "react";

const BestDirectorNomineesSlide = ({ nominees }) => (
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
      Лучший режиссер
    </h3>
    {nominees.map((director, index) => (
      <div style={{ display: "inline-block" }} key={index}>
        <img width="150px" src={director.image} alt="" />
        <p className="actor-name">{director.name}</p>
        <p className="actor-movie">{director.movie}</p>
        {index !== nominees.length - 1 && (
          <hr style={{ border: "0.1px solid #D2B48C" }} />
        )}
      </div>
    ))}
  </div>
);

export default BestDirectorNomineesSlide;
