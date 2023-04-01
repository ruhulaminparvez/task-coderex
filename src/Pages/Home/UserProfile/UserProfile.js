import React from "react";
import { useParams } from "react-router-dom";
import useUser from "../../../hooks/useUser";

const UserProfile = () => {
  const { userId } = useParams();
  const { user, posts } = useUser(userId);

  console.log("user", user, "posts", posts);
  return (
    <div className="py-3 bg-base-200 px-16">
      <div className="flex flex-col items-center justify-center py-5">
        <h1 className="text-4xl font-bold text-center">
          {user?.firstName || "N/A"} {user?.lastName || "N/A"}'s Profile
        </h1>
      </div>
      <div class="card shadow-lg bg-base-100 flex flex-row">
        <div class="profile flex items-center py-4 px-8 border-r border-gray-200">
          <img
            class="w-16 h-16 rounded-full mr-4 bg-base-200"
            src={user?.image || "https://i.pravatar.cc/300"}
            alt={user?.firstName}
          />
          <div>
            <h3 class="text-xl font-medium mb-2">
              {user?.firstName || "N/A"} {user?.maidenName || ""}{" "}
              {user?.lastName || "N/A"}
            </h3>
            <p class="text-gray-600">{user?.email}</p>
          </div>
        </div>
        <div class="company flex-grow py-4 px-8">
          <h4 class="text-xl font-medium mb-2">Company</h4>
          <p class="text-gray-600 mb-1">
            Company Name: {user?.company?.name || "N/A"}
          </p>
          <p class="text-gray-600 mb-1">
            Address: {user?.company?.address?.address || "N/A"},{" "}
            {user?.company?.address?.city || "N/A"},{" "}
            {user?.company?.address?.postalCode || "N/A"},{" "}
            {user?.company?.address?.state || "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
