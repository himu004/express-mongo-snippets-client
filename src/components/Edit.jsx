import { useLoaderData } from "react-router-dom";

const Edit = () => {
  const loadedUser = useLoaderData();

  const handleUpdateUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const updatedUser = {name, email}
    console.log(name, email);
    fetch(`http://localhost:5000/crudusers/${loadedUser._id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(updatedUser)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.modifiedCount > 0){
        alert('User updated successfully')
      }
    })
  };

  return (
    <div className="text-center mt-5">
      <h3 className="text-2xl font-bold">Editing information of {loadedUser.name}</h3>
      <form className="space-y-5 mt-5" onSubmit={handleUpdateUser}>
        <input
          className="border border-green-400 rounded-md p-2"
          type="name"
          name="name"
          placeholder="Name"
          defaultValue={loadedUser?.name}
        ></input>
        <br />
        <input
          className="border border-green-400 rounded-md p-2"
          type="email"
          name="email"
          placeholder="Email"
          defaultValue={loadedUser?.email}
        ></input>
        <br />
        <input
          type="submit"
          value="Update User"
          className="border bg-green-400 rounded-md px-4 py-2 hover:bg-green-600 hover:text-white"
        />
      </form>
    </div>
  );
};

export default Edit;
