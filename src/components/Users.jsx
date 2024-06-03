import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {

  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers)

  const handleDelete = (_id) => {
    console.log('Deleted Id: ', _id);
    fetch(`http://localhost:5000/crudusers/${_id}`, {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.deletedCount > 0) {
            // alert('Deleted Succesfully');
            const remainingUsers = users.filter(user => user._id !== _id);
            setUsers(remainingUsers);
        }
    })
  }

  return (
    <div>
      <h2 className="text-center text-3xl font-bold mt-5">
        Total User: {users.length}
      </h2>
      {users.map((user) => (
        <div className="text-center space-y-2 py-2 mt-5" key={users._id}>
          <h2 className="text-center text-orange-500 text-2xl">
            {" "}
            Name: {user.name}
            <button 
            onClick={() => handleDelete(user._id)} 
            className="border-2 rounded-md ml-5 px-3 border-orange-400 hover:bg-red-400 hover:border-white hover:text-white">
              X
            </button>
          </h2>
          <p>Email: {user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default Users;
