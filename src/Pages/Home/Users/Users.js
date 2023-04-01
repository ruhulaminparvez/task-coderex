import React from "react";
import useUsers from "../../../hooks/useUsers";

const Users = () => {
  const users = useUsers();
  const userList = users?.users;

  return (
    <div>
      <div className="flex flex-col items-center justify-center py-5">
        <h1 className="text-4xl font-bold text-center">Users List</h1>
      </div>
      <div className="grid grid-cols-1 gap-4 p-5 mx-auto sm:grid-cols-2 lg:grid-cols-3">
        {userList && userList.length > 0 ? (
          userList.map((item, index) => (
            <div className="card w-96 bg-base-100 shadow-xl" key={index+1}>
              <div className="card-body">
                <h2 className="card-title"> UserName: {item?.username || "N/A"}</h2>
                <h3 className="card-subtitle">Email: {item?.email || "N/A"}</h3>
                <h3 className="card-subtitle">Company: {item?.company?.name || "N/A"}</h3>
                <button className="btn btn-primary mt-2">View Details</button>
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-5">
            <h1 className="text-4xl font-bold text-center">No Users Found</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Users;
