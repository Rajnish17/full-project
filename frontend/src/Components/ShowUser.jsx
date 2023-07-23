import React, { useEffect, useState } from 'react'
import axios from "axios";

const ShowUser = () => {
  const[data,setData] =useState([]);

  useEffect(()=>{
      axios.get(`http://localhost:8080/user/show`).then((res)=>{
      setData(res.data.data)
      })
   },[data]);



   const handleDelte=(i)=>{
    axios.delete(`http://localhost:8080/user/delete/${i}`).then((res)=>{
      alert(res.data.message)
    }).catch((err)=>{
      console.log(err)
    })

   };


  //  const handleEdit =(id)=>{
  //   // axios.put(`http://localhost:8080/user/update/${id}`)
  //   console.log(id)
  //  }

return (

  <div>
   <table className="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Contact</th>
          {/* <th scope="col">Edit</th> */}
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        {data.map((ele, i) => {
          return ( <tr key={i}>
              <th scope="row">{ele.name}</th>
              <td >{ele.email}</td>
              <td>{ele.contact}</td>
              {/* <td><button onClick={()=>{handleEdit(ele._id)}}>Edit</button>   </td> */}
              <td><button onClick={()=>handleDelte(ele._id)}>Delete</button></td>
            </tr>
          );
        })}
      </tbody>
    </table>
    </div>
    )
}

export default ShowUser