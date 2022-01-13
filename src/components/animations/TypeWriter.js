import React, { useState, useEffect } from "react";

const sentences = [
  "Improve Your Knowledge",
  "Build Your Carrer",
  "Doing Real Time Problems",
  "Solve The Problems",
];

function TypeWriter() {
  const [text, setText] = useState({ iteration: 0, content: "" });

  const [sentence, setSentence] = useState({
    content: "",
    count: 0,
    end: false,
  });

  const element = <li>{text}</li>;

  useEffect(() => {
    const interval = setTimeout(() => {
      let i = text.iteration;
      let sentenceCount = sentence.count;
      if (i <= sentences[sentenceCount].length - 1) {
        setText((prev) => ({
          ...prev,
          content: prev.content + sentences[sentenceCount][i],
          iteration: i + 1,
        }));
      } else {
        setText((prev) => ({ ...prev, end: true }));
      }
    }, 150);

    return () => {
      clearInterval(interval);
    };
  }, [text.iteration]);

  useEffect(() => {}, []);

  return (
    <ul>
      <li>{text.content}</li>
    </ul>
  );
}

export default TypeWriter;
