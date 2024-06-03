import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

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
            <div>
                
            </div>
          <h2 className="text-center text-orange-500 text-2xl">
            {" "}
            Name: {user.name}
            
          </h2>
          <p>Email: {user.email}</p>
          <Link to={`/update/${user._id}`}>
                <button 
                className="border-2 rounded-md ml-5 px-3 text-orange-500 border-orange-400 hover:bg-blue-400 hover:border-white hover:text-white">
                    Edit
                </button>
            </Link>
            <button 
            onClick={() => handleDelete(user._id)} 
            className="border-2 rounded-md ml-2 px-3 border-orange-400 text-orange-500 hover:bg-red-400 hover:border-white hover:text-white">
              X
            </button>
        </div>
      ))}
    </div>
  );
};

export default Users;
