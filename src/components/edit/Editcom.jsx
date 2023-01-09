import React, { useState } from "react";
import parse from "html-react-parser";
import styles from "../../Button.module.css";
import {
  FaBootstrap,
  FaItalic,
  FaAlignCenter,
  FaAlignJustify,
  FaAlignLeft,
  FaAlignRight,
  FaExpandArrowsAlt,
  FaLink,
  FaListOl,
  FaListUl,
  FaHireAHelper,
  FaImage,
} from "react-icons/fa";

export const Editcom = ({ description }) => {
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const handleChange = (event) => {
    setContent(event.target.value);
    console.log("event", event);
  };
  //   const element = document.querySelector("#root");
  //   console.log(element);

  const handleBoldClick = () => {
    document.execCommand("bold");
  };

  const handleItalicClick = () => {
    document.execCommand("italic");
  };

  const handleCenterClick = () => {
    document.execCommand("underline");
  };
  const handleOlClick = () => {
    document.execCommand("insertOrderedList");
  };
  const handleulClick = () => {
    document.execCommand("insertUnorderedList");
  };
  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };
  const handleImageAdd = () => {
    const imgElement = document.createElement("img");
    imgElement.src = URL.createObjectURL(image);
    document.execCommand("insertImage", true, imgElement.outerHTML);
  };

  return (
    <div>
      <h3>Text Editor</h3>
      <div>
        <button onClick={handleImageAdd}>
          <FaImage />
        </button>
        <button onClick={handleBoldClick}>
          <FaBootstrap />
        </button>
        <button onClick={handleItalicClick}>
          <FaItalic />
        </button>
        <button onClick={handleCenterClick}>underline</button>
        <button>
          <FaAlignJustify />{" "}
        </button>
        <button>
          <FaAlignLeft />
        </button>
        <button>
          <FaAlignRight />
        </button>
        <button onClick={handleOlClick}>
          <FaListOl />
        </button>
        <button onClick={handleulClick}>
          <FaListUl />
        </button>
        <button>
          <FaHireAHelper />
        </button>
        <select style={{ width: "100px" }}>
          <option>Normal</option>
          <option>Heading Large</option>
          <option>Heading Medium</option>
          <option>Heading Small</option>
          <option>Code block</option>
        </select>
        <button>
          <FaExpandArrowsAlt />
        </button>
      </div>
      <input type="file" onChange={handleImageChange} />
      <div
        className={styles.scroll}
        contentEditable={true}
        onInput={handleChange}
        style={{ border: "1px solid black", width: "1300px", height: "350px" }}
      >
        {parse(description)}
      </div>
      {/* <p>{content}</p> */}
    </div>
  );
};
