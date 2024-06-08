import styled from "styled-components";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import React, { useEffect, useRef, useState } from "react";

const QuillContainer = styled.div`
 & > .bioEditor {
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: auto;
    box-shadow: 0 0 4px #5151ac7f;
    border-radius: 6px;
    margin-left: 5%;
    margin-top: 30%;
    padding: 5px;
    & > .edit-elm {
      min-height: 200px;
      max-height: 50vh;
      margin-top: 6px;
    }
    & > .btn-style {
      margin-left: 200px;
      background-color: #5c41e1;
      color: white;
      padding: 10px;
      border-radius: 4px;
      font-size: medium;
      padding-left: 20px;
      padding-right: 20px;
      border: none;
      outline: none;

      &.disable {
        opacity: 0.5;
        pointer-events: none;
      }
    }
  }
`
const toolbarOptions = [
  ["bold", "italic", "underline", { color: [] }, { background: [] }],
];
const modules = { module: { toolbar: toolbarOptions } };

function ContentEditable({ setDisplayMessage, btnVisibile, onUpdateClick, displayMessage }) {

  return (
    <QuillContainer>
      <div className="bioEditor">
        <div className="edit-elm">
          <ReactQuill
            modules={modules?.module}
            theme="snow"
            value={displayMessage}
            onChange={(content) => { setDisplayMessage(content) }}
            placeholder="Write here..."
          />
        </div>
        <button
          className={`btn-style ${!btnVisibile ? "disable" : ""}`}
          onClick={onUpdateClick}
        >
          Update
        </button>
      </div>
    </QuillContainer>
  )
  
}
export default ContentEditable;