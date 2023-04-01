import React from "react";
import useUsers from "../../../hooks/useUsers";
import { Link } from "react-router-dom";

const Users = () => {
  const users = useUsers();
  const userList = users?.users;

  return (
    <div className="py-3">
      <div className="flex flex-col items-center justify-center py-5">
        <h1 className="text-4xl font-bold text-center">Users List</h1>
      </div>
      <div className="flex flex-col items-center justify-center pb-5">
        <div className="grid grid-cols-1 gap-4 p-5 mx-auto sm:grid-cols-2 lg:grid-cols-3">
          {userList && userList.length > 0 ? (
            userList.map((item, index) => (
              <div className="card w-96 bg-base-100 shadow-xl" key={index + 1}>
                <div className="card">
                  <div className="card-body">
                    <div className="avatar">
                        <div className="w-24 h-24 mask mask-squircle mx-auto mb-2">
                            <img src={item?.image || "https://i.pravatar.cc/300"} alt="avatar" />
                        </div>
                    </div>
                    <h2 className="card-title text-2xl font-bold text-center mx-auto mb-2">
                      {item?.firstName || "N/A"} {item?.lastName || "N/A"}
                    </h2>
                    <h3 className="card-subtitle text-lg font-medium text-center">
                      Email: {item?.email || "N/A"}
                    </h3>
                    <h3 className="card-subtitle text-lg font-medium text-center mb-4">
                      Company: {item?.company?.name || "N/A"}
                    </h3>
                    <Link to={`/user/${item?.id}`} className="btn btn-primary px-4 py-2 transition duration-300 ease-in-out hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue mt-2">
                        View Details
                    </Link>
                  </div>
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
    </div>
  );
};

export default Users;
