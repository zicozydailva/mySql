import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [age, setAge] = useState("");
  const [position, setPosition] = useState("");
  const [wage, setWage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newData = {
      name, country, age, position, wage
    }
    await axios.post("/create", newData)
    .then(() => console.log("SUCCESS"))
  }
  return (
    <div className="App">
      <div className="information">
        <label>Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
        />
        <label>Age</label>
        <input
          value={age}
          onChange={(e) => setAge(e.target.value)}
          type="number"
        />
        <label>Country</label>
        <input
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          type="text"
        />
        <label>Position</label>
        <input
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          type="text"
        />
        <label>Wage (year)</label>
        <input value={wage} onChange={(e) => setWage(e.target.value)} type="number" />
        <button onClick={handleSubmit}>Add Employee</button>

        <div className="">
          <h1>Employees</h1>
        </div>

      </div>
    </div>
  );
}

export default App;
