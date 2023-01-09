import React from "react";
import parse from "html-react-parser";

import "../../App.css";
import {FaBootstrap,FaItalic,FaUnderline,FaAlignCenter,FaAlignJustify,FaAlignLeft,FaAlignRight,FaExpandArrowsAlt,FaLink,FaListOl,FaListUl,FaCamera,
  FaCut,
  FaQuoteRight,
  FaUndo,
  FaRedo,
  FaSubscript,
  FaSuperscript,
} from "react-icons/fa";
export function TextEditor({ description }) {
  const handlebold = () => {
    document.execCommand("bold");
  };

  const handleitalic = () => {
    document.execCommand("italic");
  };

  function handleunderline() {
    document.execCommand("underline");
  }
  function handlesubscript() {
    document.execCommand("subscript");
  }
  function handlesuperscript() {
    document.execCommand("superscript");
  }
  function handleDelete() {
    document.execCommand("delete");
  }

  const handleOlClick = () => {
    document.execCommand("insertOrderedList");
  };
  const handleulClick = () => {
    document.execCommand("insertUnorderedList");
  };

  function handleredo() {
    document.execCommand("redo");
  }
  function handleundo() {
    document.execCommand("undo");
  }
  function handlecreateLink() {
    document.execCommand("createLink");
  }
  function handleParagraphk() {
    document.execCommand("insertParagraph");
  }
  function handlejustifyCenter() {
    document.execCommand("justifyCenter");
  }
  function handlejustifyFull() {
    document.execCommand("justifyFull");
  }
  function handlejustifyLeft() {
    document.execCommand("justifyLeft");
  }
  function handlejustifyRight() {
    document.execCommand("justifyRight");
  }
  function handleInsertImage() {
    document.execCommand("inserImage");
  }
  // function handleheader() {
  //   document.execCommand("fontSize");
  // }
  return (
    <>
      <div className="container">
        <div className="options">
          {/* <!-- Text Format --> */}
          <button
            id="bold"
            className="option-button format"
            onClick={handlebold}
          >
            <FaBootstrap />
          </button>
          <button
            id="italic"
            className="option-button format"
            onClick={handleitalic}
          >
            <FaItalic />
          </button>
          <button
            id="underline"
            className="option-button format"
            onClick={handleunderline}
          >
            <FaUnderline />
          </button>
          <button
            id="strikethrough"
            className="option-button format"
            onClick={handleDelete}
          >
            <FaCut />
          </button>
          <button
            id="superscript"
            className="option-button script"
            onClick={handleParagraphk}
          >
            <FaQuoteRight />
          </button>
          <button
            id="subscript"
            className="option-button script"
            onClick={handlesubscript}
          >
            <FaSubscript />
          </button>
          <button
            id="subscript"
            className="option-button script"
            onClick={handlesuperscript}
          >
            <FaSuperscript />
          </button>

          {/* <!-- List --> */}
          <button
            id="insertOrderedList"
            className="option-button"
            onClick={handleOlClick}
          >
            <FaListOl />
          </button>
          <button
            id="insertUnorderedList"
            className="option-button"
            onClick={handleulClick}
          >
            <FaListUl />
          </button>

          {/* <!-- Undo/Redo --> */}
          <button id="undo" className="option-button" onClick={handleundo}>
            <FaUndo />
          </button>
          <button id="redo" className="option-button" onClick={handleredo}>
            <FaRedo />
          </button>

          {/* <!-- Link --> */}
          <button
            id="createLink"
            className="adv-option-button"
            onClick={handlecreateLink}
          >
            <FaLink />
          </button>
          <button
            id="unlink"
            className="option-button"
            onClick={handleInsertImage}
          >
            <FaCamera />
          </button>

          {/* <!-- Alignment --> */}
          <button
            id="justifyLeft"
            className="option-button align"
            onClick={handlejustifyCenter}
          >
            <FaAlignCenter />
          </button>
          <button
            id="justifyCenter"
            className="option-button align"
            onClick={handlejustifyFull}
          >
            <FaAlignJustify />
          </button>
          <button
            id="justifyRight"
            className="option-button align"
            onClick={handlejustifyLeft}
          >
            <FaAlignLeft />
          </button>
          <button
            id="justifyFull"
            className="option-button align"
            onClick={handlejustifyRight}
          >
            <FaAlignRight />
          </button>
          <button id="indent" className="option-button spacing">
            <FaExpandArrowsAlt />
          </button>

          {/* <!-- Headings --> */}
          {/* <select
            id="formatBlock"
            className="adv-option-button"
            onClick={handleheader}
          >
            <option value="H1">H1</option>
            <option value="H2">H2</option>
            <option value="H3">H3</option>
            <option value="H4">H4</option>
            <option value="H5">H5</option>
            <option value="H6">H6</option>
          </select> */}

          {/* text */}
        </div>
        <div id="text-input" contentEditable="true">
          {parse(description)}
        </div>
      </div>
    </>
  );
}
