import React, { useEffect, useState } from "react";
import { LinearGradientText } from "../../styledComponents/HomeStyles";

function TypeWriter(props) {
  var i = 0;
  var [text, setText] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setInterval(() => {
        if (i <= props.text.length - 1) {
          setText((prev) => prev + props.text[i]);
          i++;
        }
      }, 150);
    }, 200);
    console.log(props.text);
  }, []);

  return (
    <LinearGradientText as="span" {...props}>
      {text}
    </LinearGradientText>
  );
}

export default TypeWriter;
