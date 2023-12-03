import React, { useState } from 'react';
import './Api.css'

const Api = () => {
  // const [employees, setEmployees] = useState([]);

  const studentObject = {
    "students": [
      {
        "id": 1,
        "name": "John Doe",
        "age": 20,
        "grade": "A"
      },
      {
        "id": 2,
        "name": "Jane Smith",
        "age": 21,
        "grade": "B"
      },
      {
        "id": 3,
        "name": "Bob Johnson",
        "age": 19,
        "grade": "C"
      },
      {
        "id": 4,
        "name": "Alice Williams",
        "age": 22,
        "grade": "A"
      },
      {
        "id": 5,
        "name": "Charlie Brown",
        "age": 20,
        "grade": "B"
      },
      {
        "id": 6,
        "name": "Diana Garcia",
        "age": 21,
        "grade": "A"
      },
      {
        "id": 7,
        "name": "Evan Davis",
        "age": 19,
        "grade": "C"
      },
      {
        "id": 8,
        "name": "Fiona White",
        "age": 22,
        "grade": "B"
      },
      {
        "id": 9,
        "name": "George Miller",
        "age": 20,
        "grade": "A"
      },
      {
        "id": 10,
        "name": "Hannah Lee",
        "age": 21,
        "grade": "B"
      }
    ]
  }
  
  const [studentsData, setStudentsData] = useState(studentObject.students)


  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("https://dummy.restapiexample.com/employees");
  //       const data = await response.json();
  //       setEmployees(data.data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
      <div>
        <h3>Students Details</h3>
        <table >
           <tr>
            <th>Name</th>
            <th>Age:</th>
            <th>Grade:</th>
         </tr>
        { studentsData.map(student => (
             
         <tr key={ student.id }>
            <td>{ student.name }</td>
            <td>{ student.age }</td>
            <td>{ student.grade }</td>
         </tr>        

      )) }

      </table>

    </div>
  );
};

export default Api;



// import React, { useState, useEffect } from 'react'

// const Api = () => {

//   const [ employee, setEmployee ] = useState([])

//   useEffect(() => {
//     const fetchData = async () => {
//       try{
//          const response = await fetch("https://dummy.restapiexample.com/employees")
//          const data = await response.json()
//         //  console.log(data.data)
//          setEmployee(data.data)
//       } catch (error) {
//          console.log(error)
//       }
//      };

//     fetchData()

//   }, [] );

//   // useEffect(() => {
//   //   fetch("https://dummy.restapiexample.com/employees")
//   //       .then(response => response.json())
//   //       .then(data => console.log(data.data))
//   //       .catch(error => console.log(error))
//   // }, [])

  

//   return (
//     <div>
//       <button>Get Data</button>
//       {employee}
//     </div>
//   )
// }

// export default Api

