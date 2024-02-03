import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  // this is not the best way to load show all data
  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div>
      <div className="bg-white">
        <h1 className=" text-2xl lg:text-7xl text-center font-semibold ">
          Featured Jobs
        </h1>
        <p className="mt-2 lg:mt-5 text-center text-gray-700 lg:text-xl">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        {jobs.slice(0, dataLength).map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
      <div className={dataLength === jobs.length ? "hidden" : ""}>
        <div className="flex justify-center mb-5">
        <button
          onClick={() => setDataLength(jobs.length)}
          className="btn btn-primary"
        >
          Show All Jobs
        </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedJobs;
