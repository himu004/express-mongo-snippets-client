import { useLoaderData } from "react-router-dom";

const Users = () => {

    const users = useLoaderData();

    return (
        <div>
            <h2 className="text-center text-3xl font-bold mt-5">Total User: {users.length}</h2>
            {
                users.map(user => <p className="text-center text-orange-500 text-2xl" key={users._id}>{user.name} : {user.email}</p>)
            }
        </div>
    );
};

export default Users;