import React from "react";
import "./Form.css";

function Form({ handleChangeText, handleAddFeedback, char, text }) {
  function result() {
    let result = 0;
    result = 200 - char;
    if (result > 0) {
      return result;
    } else {
      return 0;
    }
  }
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
        <p>{result()} left</p>
        <p>
          PUBLISH <i className="fa-solid fa-arrow-up"></i>
        </p>
      </div>
    </div>
  );
}

export default Form;
