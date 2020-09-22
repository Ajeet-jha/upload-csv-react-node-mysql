import React, { useState } from "react";
import uniqid from "uniqid";
function DynamicInput() {
  const [newInput, setInput] = useState([]);
  const [sn, setSn] = useState(0);
  const [formData, updateFormData] = useState({});

  const genarateInput = (e) => {
    e.preventDefault();
    const tempId = uniqid();
    setSn(sn + 1);
    const tempInput = (
      <>
        <label>Enter Details - {sn} : </label>
        <input
          name={`input-${tempId}`}
          key={`input-${tempId}`}
          onChange={handleChage}
        />
        <textarea
          name={`textarea-${tempId}`}
          key={`textarea-${tempId}`}
          onChange={handleChage}
        ></textarea>
      </>
    );
    return setInput([...newInput, tempInput]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hihi", formData);
  };

  const handleChage = ({ target }) => {
    updateFormData((state) => ({
      ...state,
      [target.name]: target.value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      {newInput.map((input, index) => {
        return <div key={index}>{input}</div>;
      })}
      <button onClick={genarateInput}>+</button>
      {newInput.length ? <input type="submit" /> : ""}
    </form>
  );
}

export default DynamicInput;
