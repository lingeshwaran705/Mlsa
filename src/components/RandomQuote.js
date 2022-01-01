import React from "react";

const Quotes = [
  "Teachers can open the door, but you must enter it yourself.",
  "The beautiful thing about learning is that no one can take it away from you.",
  "Education is the most powerful weapon you can use to change the world.",
  "The mind is not a vessel to be filled but a fire to be ignited.",
  "Don’t let what you cannot do interfere with what you can do.",
  "A person who never made a mistake never tried anything new.",
  "Procrastination makes easy things hard and hard things harder.",
  "Learning is never done without errors and defeat",
  "The Never let the fear of striking out stop you from playing the game.",
  "You don’t have to be great to start, but you have to start to be great.",
  "The expert in anything was once a beginner.",
];

function RandomQuote() {
  const rand = Math.floor(Math.random() * 11);
  return <>{Quotes[rand]}</>;
}

export default RandomQuote;
