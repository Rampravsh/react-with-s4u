import React, { useState } from "react";
import LoadingImage from "./LoadingImage";

const Card = ({ card }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <>
      <div className="card bg-base-100 w-90 shadow-sm ">
        <figure className="px-10 pt-10">
          {!imageLoaded && <LoadingImage />}
          {card.urlToImage && (
            <img
              src={card.urlToImage}
              alt={card.title}
              className={`rounded-xl ${imageLoaded ? "block" : "hidden"}`}
              onLoad={() => setImageLoaded(true)}
            />
          )}
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{card.title}</h2>
          <p>{card.description}</p>
          <div className="card-actions">
            <button onClick={() => window.open(card.url, "_blank")} className="btn btn-primary">Read More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
