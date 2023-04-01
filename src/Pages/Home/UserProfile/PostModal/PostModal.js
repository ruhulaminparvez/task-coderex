import React from "react";

const PostModal = ({ post }) => {
  return (
    <div>
      <input type="checkbox" id="postModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-3xl relative">
          <div className="flex items-center justify-between">
            <label
              htmlFor="postModal"
              className="btn btn-sm btn-primary btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="text-xl font-bold">{post?.title || "N/A"}</h3>
          </div>
          <hr className="my-2" />
          {post?.tags && post?.tags.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {post?.tags.map((tag, index) => (
                <span className="badge badge-primary" key={index + 1}>
                  {tag}
                </span>
              ))}
            </div>
          ) : (
            <div className="flex flex-wrap gap-2">
              <span className="badge badge-primary">N/A</span>
            </div>
          )}
          <p className="py-4 text-justify">{post?.body || "N/A"}</p>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
