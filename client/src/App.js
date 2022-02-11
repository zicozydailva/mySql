import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [age, setAge] = useState("");
  const [position, setPosition] = useState("");
  const [wage, setWage] = useState("");

  const [employees, setEmployees] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newData = {
      name, country, age, position, wage
    }
    await axios.post("/create", newData)
    .then(() => setEmployees([...employees, newData ]))
    
  }

  const getEmply = async () => {
  await axios.get("/employeez").then(response => {
    setEmployees(response.data)
  })
  
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

          <button onClick={getEmply}> Get Employees</button>
        <div className="">
          <div className="p">
            
          {
            employees.map(emp => {
              return <div className="newEmply" key={emp.id}>
                <h4>Name:{emp.name}</h4>
                <h4>Age:{emp.age}</h4>
                <h4>Country:{emp.country}</h4>
                <h4>Position:{emp.position}</h4>
                <h4>Wage:{emp.wage}</h4>
              </div>
            })
          }
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
