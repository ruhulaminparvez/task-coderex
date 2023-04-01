import React from "react";

const UserProfilePosts = ({ posts }) => {
  const postList = posts?.posts;
  console.log(postList);
  return (
    <>
      <div className="flex flex-col items-center justify-center pb-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {postList && postList.length > 0 ? (
            postList.map((item, index) => (
              <div className="card w-96 bg-base-100 shadow-xl" key={index + 1}>
                <div className="card-body">
                  <h2 className="card-title">{item?.title || "N/A"}</h2>
                  <p>{item?.body?.substring(0, 70) + "..." || "N/A"}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary mt-3">Read More</button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center pb-5">
              <h1 className="text-4xl font-bold text-center">No Posts Found</h1>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default UserProfilePosts;
