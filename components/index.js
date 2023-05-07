import React from 'react';
import { useState, useEffect } from "react";

// const allUserData = () => {
// let [data, setData] = useState([]);

// useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response => response.json())
//     .then(users => prepareData(users))
// },[]);

// const prepareData =(users) => {
// const mapData = users.map((user) => {
//     return (
//         <li key={user.id}>{user.name}</li>
//     )
// })
// setData(mapData);
// }



//   return (
//     <div>
//       <ul>
//         {data}
//       </ul>
//     </div>
//   )
// }

// export default allUserData;



const AllUserData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => prepareData(users))
  }, []);

  const prepareData = (users) => {
    const mapData = users.map((user) => {
      return (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
        </tr>
        
      )
    })
    setData(mapData);
  }

  return (
    <div>
      <td>
        {data}
      </td>
    </div>
  )
}

export default AllUserData;
