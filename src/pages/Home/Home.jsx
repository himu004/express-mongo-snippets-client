import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full h-screen flex flex-col  justify-center items-center space-y-5">
       <h2 className="text-2xl font-bold text-red-400">Basic Server Project with CRUD Operation</h2>
      
      <br />
      <Link to="/usermanagement">
        <button className="border-2 border-red-400 rounded-md p-2">User Management</button>
      </Link>
      <Link to="/simplecrud">
        <button className="border-2 border-red-400 rounded-md p-2">Simple CRUD</button>
      </Link>
      
    </div>
  );
};

export default Home;
