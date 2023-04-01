import React from "react";
import notFound from "../../Assets/not-found/not-found.svg";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="bg-base-200 lg:px-16">
      <div className="flex flex-col items-center justify-center py-8">
        <h1 className="text-4xl font-bold text-center">404 Not Found</h1>
        <img className="h-96 w-96" src={notFound} alt="not-found" />
        <Link to="/">
            <button className="btn btn-primary mt-3">Go Back</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
