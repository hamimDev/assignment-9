import { MdLocationOn } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const {
    id,
    image,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
    <div className="card card-compact  shadow-xl mb-5 ml-10 mr-10 p-10 mt-10 bg-gray-100 ">
      <div>
        <img className="w-32" src={image} alt="" />
        <h1 className="mt-5 text-3xl font-semibold">{job_title}</h1>
        <p className="text-lg font-medium text-gray-500">{company_name}</p>
        <div className="mt-5">
          <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 mb-5  text-[#7E90FE]">
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
        <div className="mt-10 mb-10">
          <Link to={`/job/${id}`}>
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
        <hr className="mt-5 border-t border-black " />
      </div>
    </div>
  );
};

export default Job;
