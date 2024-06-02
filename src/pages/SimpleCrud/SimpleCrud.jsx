import { Link } from "react-router-dom";

const SimpleCrud = () => {

    const handleAddUser = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const user = {name, email}
        console.log(user);
        fetch('http://localhost:5000/crudusers',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                alert('User Added Successfully');
                e.target.reset();
            }
        })
    }

  return (
    <div className="w-full h-screen text-center mt-5 text-2xl">
      <h2 className="underline text-green-500 font-bold">
        Simple CRUD OPeration
      </h2>
      <form className="space-y-5 mt-5" onSubmit={handleAddUser}>
        <input
          className="border border-green-400 rounded-md p-2"
          type="name"
          name="name"
          placeholder="Name"
        ></input>
        <br />
        <input
          className="border border-green-400 rounded-md p-2"
          type="email"
          name="email"
          placeholder="Email"
        ></input>
        <br />
        <input type="submit" value="Add User" className="border bg-green-400 rounded-md px-4 py-2 hover:bg-green-600 hover:text-white"/>
      </form>
      <Link to='/users'>
      <button className="border bg-blue-600 rounded-md px-4 py-2 hover:bg-blue-800 hover:text-white">Added Users List</button>
      </Link>
      
    </div>
  );
};

export default SimpleCrud;
