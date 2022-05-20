import { isDisabled } from "@testing-library/user-event/dist/utils";
import React from "react";
import { useState } from "react";
import "./index.css";

function App() {
  const [text, setText] = useState("");
  const [sended, setSended] = useState(false);
  const [blur, setBlur] = useState(false);

  const handleChange = (e) => {
    setBlur(false);
    setSended(false);
    setText(e.target.value);
  };

  const blurHandler = () => {
    if (text === "") {
      setSended(false);
      setBlur(true);
    }
  };

  const handleSubmit = (e) => {
    if (text !== "") {
      e.preventDefault();
      setText("");
      setSended(true);
      console.log(text);
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          onBlur={blurHandler}
          type="text"
          className={blur ? "is-error" : "input-text"}
          value={text}
          onChange={handleChange}
        />
        <button className="btn" disabled={blur ? "disabled" : ""} type="submit">
          Отправить
        </button>
      </form>
      {sended && (
        <div className="send-message">Сообщение успешно отправлено</div>
      )}
      {blur && (
        <div style={{ color: "red" }}>Поле ввода не должно быть пустым</div>
      )}
    </div>
  );
}

export default App;
