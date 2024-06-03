
//! Ei logic niye bhabte hobe apatoto bad takuk

const UserCard = ({user, handleDelete}) => {

    const {id, name, email} = user;

    

    return (
        <div className="text-center space-y-2 py-2 mt-5">
          <h2 className="text-center text-orange-500 text-2xl">
            {" "}
            Name: {name}
            <button 
            onClick={handleDelete} 
            className="border-2 rounded-md ml-5 px-3 border-orange-400 hover:bg-red-400 hover:border-white hover:text-white">
              X
            </button>
          </h2>
          <p>Email: {email}</p>
        </div>
    );
};

export default UserCard;