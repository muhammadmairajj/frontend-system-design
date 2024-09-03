import React from "react";

function AutoComplete({ data, onSelect }) {
  const [inputValue, setInputValue] = React.useState("");
  const [hide, setHide] = React.useState(false);

  function handleChange(e) {
    setInputValue(e.target.value);
    setHide(false);
  }

  function handleClear() {
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
    <div>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Search here..."
        />
        {inputValue && <button onClick={handleClear}>Cancel</button>}
      </div>
      {!hide && (
        <Suggestion data={suggestionData || []} onClick={onOptionSelect} />
      )}
    </div>
  );
}

function Suggestion({ data, onClick }) {
  function handleSelect(value) {
    return () => {
      onClick(value);
    };
  }
  return (
    <div>
      {data?.map((item) => (
        <button key={item} onClick={handleSelect(item)}>
          {item}
        </button>
      ))}
    </div>
  );
}

export default AutoComplete;
