import React from "react";
import { Link } from "react-router-dom";

const AppliedJob = ({ job }) => {
  const {
    id,
    image,
    job_description,
    job_responsibility,
    educational_requirements,
    contact_information,
    experiences,
    job_title,
    company_name,
    job_type,
    location,
    remote_or_onsite,
    salary,
  } = job;
  return (
    <div className="container mx-auto lg:flex  lg:justify-between lg:w-[50%] items-center mb-10 shadow-xl p-5">
      <div className="bg-gray-400 p-10 rounded-lg mr-5">
        <img className="w-72" src={image} alt="" />
      </div>
      <div className="">
        <h1 className="lg:text-3xl font-semibold">{job_title}</h1>
        <h2 className="lg:text-2xl font-medium text-gray-500">{company_name}</h2>
        <div className="mt-5">
          <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 mb-3 text-[#7E90FE]">
            {remote_or_onsite}
          </button>
          <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">
            {job_type}
          </button>
        </div>
        <div className="flex mt-5">
          <div className="flex mr-5 items-center">
            <img
              className="lg:w-6 w-6 h-6 lg:h-auto"
              src="https://cdn-icons-png.freepik.com/256/2838/2838912.png?ga=GA1.1.540724036.1706111289&semt=ais"
              alt=""
            />
            <p className="ml-1 font-medium lg:text-lg">{location}</p>
          </div>
          <div className="flex items-center">
            <img
              className="lg:w-6 w-6 h-6 lg:h-auto"
              src="https://cdn-icons-png.freepik.com/256/3135/3135673.png?ga=GA1.1.540724036.1706111289&semt=ais"
              alt=""
            />
            <p className="ml-1 font-medium text-lg">{salary}</p>
          </div>
        </div>
      </div>
      <div className="mt-10 mb-10">
          <Link to={`/job/${id}`}>
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
    </div>
  );
};

export default AppliedJob;
