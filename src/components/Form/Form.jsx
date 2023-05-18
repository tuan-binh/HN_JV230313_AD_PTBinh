import React from "react";
import "./Form.css";

function Form({ handleChangeText, handleAddFeedback, char, text }) {
  return (
    <div className="form-feedback">
      <textarea
        onChange={handleChangeText}
        placeholder="Type riview here..."
        name=""
        id=""
        value={text}
      ></textarea>
      <div onClick={handleAddFeedback} className="action-form">
        <p>{200 - char} left</p>
        <p>
          PUBLISH <i className="fa-solid fa-arrow-up"></i>
        </p>
      </div>
    </div>
  );
}

export default Form;
