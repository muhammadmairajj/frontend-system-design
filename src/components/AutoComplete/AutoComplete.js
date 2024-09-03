import React from "react";
import "./style.css";

function AutoComplete({ data, onSelect }) {
  const [inputValue, setInputValue] = React.useState("");
  const [hide, setHide] = React.useState(false);

  function handleValueChange(e) {
    let value = e.target.value;
    setInputValue(value);
    setHide(false);
  }

  function handleClearInput() {
    setInputValue("");
  }

  function onOptionSelect(value) {
    onSelect(value);
    setInputValue(value);
    setHide(true);
  }

  const suggestionData =
    inputValue &&
    data.filter((d) => d.toLowerCase().includes(inputValue.toLowerCase()));

  return (
    <div className="main_div">
      <div className="main_sub_div">
      <input
        type="text"
        value={inputValue}
        onChange={handleValueChange}
        placeholder="search here..."
      />
      {inputValue && <button className="clear_btn" onClick={handleClearInput}>Clear</button>}
      </div>


      {!hide && (
        <Suggestions onClick={onOptionSelect} data={suggestionData || []} />
      )}
    </div>
  );
}

function Suggestions({ data, onClick }) {
  function handleSuggestionClicked(value) {
    return () => {
      onClick(value);
    };
  }

  return (
    <div>
      {data?.map((item) => {
        return (
          <div
            data-btn-id={data}
            aria-label="Fruits"
            key={item}
            onClick={handleSuggestionClicked(item)}
            style={{ cursor: "pointer" }}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
}

export default AutoComplete;
