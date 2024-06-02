import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  const handleAdUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const age = form.age.value;
    const user = { name, email, age };
    console.log(user);
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const newUsers = [...users, data];
        setUsers(newUsers);
        form.reset();
      });
  };

  return (
    <div className="text-center space-y-5">
      <h1 className="mt-10 text-2xl text-bold">User Management System</h1>
      <h2>User: {users.length}</h2>
      <form className="space-y-5" onSubmit={handleAdUser}>
        <input 
        className="border border-red-400 rounded-md p-2"
        type="name" name="name" placeholder="Name">
        </input>
        <br />
        <input 
        className="border border-red-400 rounded-md p-2"
        type="email" name="email" placeholder="Email">
        </input>
        <br />
        <input 
        className="border border-red-400 rounded-md p-2"
        type="number" name="age" placeholder="Age">
        </input>
        <br />
        <button className="border bg-green-400 rounded-md px-4 py-2 hover:bg-green-600 hover:text-white">Add User</button>
      </form>
      <div>
        {users.map((user) => (
          <div key={users.id}>
            <p>{user.id}</p>
            <h3 className="text-red-500">{user.name}</h3>
            <p>{user.email}</p>
            <p>{user.age}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
