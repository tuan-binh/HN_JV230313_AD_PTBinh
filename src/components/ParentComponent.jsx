import React, { useEffect, useState } from "react";
import Header from "./Header/Header";
import Search from "./Search/Search";
import Listfeedback from "./Listfeedback/Listfeedback";
import Form from "./Form/Form";

function ParentComponent({ handleToggle }) {
  const [list, setList] = useState([
    { text: "minh cường và hoàng phú", time: "18/05/2023" },
  ]);

  const [text, setText] = useState("");

  const [char, setChar] = useState(0);

  function handleChangeText(e) {
    setText(e.target.value);
    setChar(e.target.value.length);
  }

  function handleAddFeedback() {
    const time = new Date();
    let day = time.getDate();
    let month = time.getMonth() + 1;
    let year = time.getFullYear();
    if (text !== "" && text.length <= 200) {
      setList([...list, { text: text, time: `${day}/${month}/${year}` }]);
      setText("");
      setChar(0);
    }
  }

  function handleDelete(index) {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  }

  const [textSearch, setTextSearch] = useState("");
  const [arrSearch, setArrSearch] = useState([]);
  function handleChangeTextSearch(e) {
    setTextSearch(e.target.value);
  }

  useEffect(() => {
    let newList = list.filter((e) => {
      return textSearch.toLowerCase().indexOf(e.text.toLowerCase()) !== -1;
    });

    setArrSearch(newList);
  }, [textSearch]);

  return (
    <div>
      <Header handleToggle={handleToggle} />
      <Search
        handleChangeTextSearch={handleChangeTextSearch}
        textSearch={textSearch}
      />
      <div className="flex-feedback">
        <Listfeedback
          list={!arrSearch.length ? list : arrSearch}
          handleDelete={handleDelete}
        />
        <Form
          handleChangeText={handleChangeText}
          handleAddFeedback={handleAddFeedback}
          char={char}
          text={text}
        />
      </div>
    </div>
  );
}

export default ParentComponent;
