import React from "react";

const BestActorNomineesInSecondPlanSlide = ({ nominees }) => (
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
      Лучший мужской актер второго плана
    </h3>
    {nominees.map((actor2, index) => (
      <div style={{ display: "inline-block" }} key={index}>
        <img width="150px" src={actor2.image} alt="" />
        <p className="actor-name">{actor2.name}</p>
        <p className="actor-movie">{actor2.movie}</p>
        {index !== nominees.length - 1 && (
          <hr style={{ border: "0.1px solid #D2B48C" }} />
        )}
      </div>
    ))}
  </div>
);

export default BestActorNomineesInSecondPlanSlide;
