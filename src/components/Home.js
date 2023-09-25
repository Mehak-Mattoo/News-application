import React from "react";

export default function Home() {
  const container = {
    position: " relative" /* Set the container's position to relative */,
    minHeight: "100%",
    color: "#FF6464",
    fontWeight: "900",
    fontSize: "3.5vw",
    marginBottom: "2rem",
  };

  const name = {
    position: "absolute",
    bottom: "0",
    left: "0",
    fontSize: "1.5vw",
    color: "#263A29",
    padding: "1rem",
  };

  return (
    <>
      <div className="container mt-5 pt-5">
        <h2 className="text-center" style={container}>
          Bringing Global Headlines to Your Fingertips
        </h2>
        <p>
          News Verse is built using React to deliver live events and latest news
          as it happens.
        </p>
        <p>
          My responsive design adapts to different screen sizes to bring you the
          best content forward.
        </p>
        <p>
          Experience easy navigation with news articles organized into different
          categories.
        </p>
        <p className="text-center" style={name}>
          Made by Mehak Mattoo &hearts;
        </p>
      </div>
    </>
  );
}
