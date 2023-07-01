// import logo from './logo.svg';
// import './App.css';
import axios from 'axios'
import { useState, useEffect } from 'react';

function App() {
  const [students, setStudents] = useState([])
  const [cars, setCars] = useState([])
  // useEffect(() => {
    const getStudent = async () => {
      const { data } = await axios.get('http://localhost:3000/api/students')
      setStudents(data)
      return data
    }

    const getCars = async () => {
      const { data } = await axios.get('http://localhost:3000/base/cars')
      setCars(data)
      return data
    }

    // getStudent()

  // },[])
  return (
    <div className="App">
      <div>
        <h3>学生信息</h3>
        <button onClick={e => getStudent()}>获取学生信息</button>
        <ul>
          {students.map((student) => <li key={student.id}>{student.name}</li> )}
        </ul>
      </div>

      <div>
        <h3>汽车信息</h3>
        <button onClick={e => getCars()}>获取汽车信息</button>
        <ul>
          {cars.map((car) => <li key={car.id}>{car.name}</li> )}
        </ul>
      </div>
    </div>
  );
}

export default App;
