import React, { useState } from "react";

function Editcom1() {
  const [content, setContent] = useState("");

  function handleChange1(event) {
    setContent(event.target.value);
  }

  function handleBold() {
    document.execCommand("bold");
  }

  function handleItalic() {
    document.execCommand("italic");
  }

  function handleUnderline() {
    document.execCommand("underline");
  }

  return (
    <div>
      <h2>Text Editor</h2>
      <div
        contenteditable={true}
        onChange={handleChange1}
        style={{ border: "1px solid black", width: "1300px", height: "350px" }}
      >
        {content}
      </div>
      <div>
        <button onClick={handleBold}>Bold</button>
        <button onClick={handleItalic}>Italic</button>
        <button onClick={handleUnderline}>Underline</button>
      </div>
    </div>
  );
}

export default Editcom1;
