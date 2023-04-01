import React from "react";
import { useParams } from "react-router-dom";
import useUser from "../../../hooks/useUser";
import UserProfileInfo from "./UserProfileInfo/UserProfileInfo";
import UserProfilePosts from "./UserProfilePosts/UserProfilePosts";

const UserProfile = () => {
  const { userId } = useParams();
  const { user, posts } = useUser(userId);

  return (
    <div className="py-5 bg-base-200 px-16">
      <div className="flex flex-col items-center justify-center py-8">
        <h1 className="text-4xl font-bold text-center">
          {user?.firstName || "N/A"} {user?.lastName || "N/A"}'s Profile
        </h1>
      </div>
      {/* User Profile Info Card Start */}
      <UserProfileInfo user={user} />
      {/* User Profile Info Card End */}
      <div className="flex flex-col items-center justify-center py-10">
        <h1 className="text-4xl font-bold text-center">
          {user?.firstName || "N/A"} {user?.lastName || "N/A"}'s Posts
        </h1>
      </div>
      {/* User Profile Posts Card Start */}
      <UserProfilePosts posts={posts} />
      {/* User Profile Posts Card End */}
    </div>
  );
};

export default UserProfile;
