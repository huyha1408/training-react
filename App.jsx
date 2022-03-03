import React, { useState } from "react";

function App() {
  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState([]);

  const buttonAdd = () => {
    setJobs((prev) => [...prev, job]);
    setJob("");
  };

  const deleteButton = () => {
    setJob(jobs.slice(0, -1));
    setJob("");
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>TODO LIST</h1>
      <div>
        <input
          style={{ padding: "5px" }}
          value={job}
          onChange={(e) => setJob(e.target.value)}
          type="text"
        />
        <button style={{ marginLeft: "10px" }} onClick={buttonAdd}>
          Add
        </button>
      </div>

      <ul>
        {jobs.map((job, index) => (
          <li
            onClick={deleteButton}
            style={{
              border: "1px solid black",
              padding: "5px",
              cursor: "pointer",
              margin: "3px 0px",
            }}
            key={index}
          >
            {job}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
