import React from "react";
import { Link } from "react-router-dom";
import notFound from "../../Assets/not-found/not-found.svg";

const About = () => {
  return (
    <div className="bg-base-200 lg:px-16">
      <div className="flex flex-col items-center justify-center py-8">
        <h1 className="text-4xl font-bold text-center">About Page Not Found</h1>
        <img className="h-96 w-96" src={notFound} alt="not-found" />
        <Link to="/">
          <button className="btn btn-primary mt-3">Go Back</button>
        </Link>
      </div>
    </div>
  );
};

export default About;
