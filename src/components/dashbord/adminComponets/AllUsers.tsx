import React, { useEffect, useState } from "react";
import UserRow from "./UserRow";

const AllUsers = () => {
    const [users,setUsers] = useState([])

    useEffect(()=>{
       fetch(`${process.env.DB_URL}/users`)
       .then(res=>res.json())
       .then(data=>setUsers(data))
    },[])
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Unique ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Join at</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
          {
            users.map((user,index)=> <UserRow key={index} user={user}/>)
          }
          </tbody>
          
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
