import React from "react";
import "./Listfeedback.css";

function Listfeedback({ list, handleDelete }) {
  return list.map((e, i) => {
    return (
      <div key={Math.random()} className="item-feedback">
        <div className="content">{e.text}</div>
        <div className="action">
          <p>{e.time}</p>
          <p>
            <i
              onClick={() => handleDelete(i)}
              className="fa-regular fa-trash-can"
            ></i>
          </p>
        </div>
      </div>
    );
  });
}

export default Listfeedback;
