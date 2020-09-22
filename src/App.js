import React, { useState } from "react";
import DynamicInput from "./components/DynamicInput";

function App() {
  const [file, setFile] = useState("");
  const handleChange = (e) => {
    const uploadedFiles = e.target.files[0];
    const extension = uploadedFiles.name.split(".")[1];
    const isValidFile = ["csv", "xlx", "xlsx"].includes(extension);
    if (!isValidFile) {
      console.log("Kindly Upload CSV files only !!");
      return false;
    } else {
      setFile(uploadedFiles);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    file && fetch('http://localhost:4000/upload', {
      method: 'POST',
      body: formData
    })
    .then(data => {
      console.log(data.statusText,data)
    })
    .catch(error => {
      console.error(error)
    })
  }

  return (
    <div className="App">
      <form action="POST">
        <input type="file" name="file" onChange={handleChange} />
        <button type="submit" onClick={handleSubmit}>
          Upload File
        </button>
      </form>
      <DynamicInput />
    </div>
  );
}

export default App;
