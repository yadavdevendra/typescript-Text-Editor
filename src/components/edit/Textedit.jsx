import { useState } from "react";
import parse from "html-react-parser";

export function Textedit({ description }) {
  const [textStyle, setTextStyle] = useState({
    fontWeight: "normal",
    fontStyle: "normal",
    textAlign: " normal",
  });
  const handleChange = (event) => {
    // setContent(event.target.value);
    // console.log("event", event);
  };
  function handleClick() {
    setTextStyle({
      fontWeight: "bold",
    });
  }
  function handleItalicClick() {
    setTextStyle({
      fontStyle: "italic",
    });
  }
  function handleUnderClick() {
    setTextStyle({
      fontStyle: "unerline",
    });
  }
  function handleCenterClick() {
    setTextStyle({
      textAlign: "center",
    });
  }

  return (
    <div>
      <button onClick={handleClick}>Make text bold and italic</button>
      <button onClick={handleItalicClick}>italic</button>
      <button onClick={handleUnderClick}>underline</button>
      <button onClick={handleCenterClick}>center</button>
      {/* <p contentEditable={true} style={textStyle}>
        Some text
      </p> */}

      <div
        // className={styles.scroll}
        contentEditable={true}
        onInput={handleChange}
        style={{ border: "1px solid black", width: "1300px", height: "350px" }}
      >
        <p contentEditable={true} style={textStyle}>
          {parse(description)}
        </p>
      </div>
    </div>
  );
}
