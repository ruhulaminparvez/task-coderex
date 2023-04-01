import React from "react";

const UserProfileInfo = ({user}) => {
  return (
    <>
      <div className="card shadow-lg bg-base-100 flex flex-row">
        <div className="profile flex items-center py-4 px-8 border-r border-gray-200">
          <img
            className="w-16 h-16 rounded-full mr-4 bg-base-200"
            src={user?.image || "https://i.pravatar.cc/300"}
            alt={user?.firstName}
          />
          <div>
            <h3 className="text-xl font-medium mb-2">
              {user?.firstName || "N/A"} {user?.maidenName || ""}{" "}
              {user?.lastName || "N/A"}
            </h3>
            <p className="text-gray-600">{user?.email}</p>
          </div>
        </div>
        <div className="company flex-grow py-4 px-8">
          <h4 className="text-xl font-medium mb-2">Company</h4>
          <p className="text-gray-600 mb-1">
            Company Name: {user?.company?.name || "N/A"}
          </p>
          <p className="text-gray-600 mb-1">
            Address: {user?.company?.address?.address || "N/A"},{" "}
            {user?.company?.address?.city || "N/A"},{" "}
            {user?.company?.address?.postalCode || "N/A"},{" "}
            {user?.company?.address?.state || "N/A"}
          </p>
        </div>
      </div>
    </>
  );
};

export default UserProfileInfo;
