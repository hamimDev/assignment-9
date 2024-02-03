import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localstorage";
import AppliedJob from "./Appliedjob";

const AppliedJobs = () => {
  const jobs = useLoaderData();

  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);

  const handleJobsFilter = (filter) => {
    if (filter === "all") {
      setDisplayJobs(appliedJobs);
    } else if (filter === "remote") {
      const remoteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setDisplayJobs(remoteJobs);
    } else if (filter === "onsite") {
      const onsiteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setDisplayJobs(onsiteJobs);
    }
  };

  useEffect(() => {
    const storedJobIds = getStoredJobApplication();
    if (jobs.length > 0) {
      // const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id));

      const jobsApplied = [];
      for (const id of storedJobIds) {
        const job = jobs.find((job) => job.id === id);
        if (job) {
          jobsApplied.push(job);
        }
      }
      setAppliedJobs(jobsApplied);
      setDisplayJobs(jobsApplied);
      // console.log(jobs, storedJobIds, jobsApplied)
    }
  }, [jobs]);
  return (
    <div className="mt-14 lg:mt-32 text-black h-auto">
      <h1 className="text-6xl font-semibold text-center pt-10">Applied Jobs</h1>
      <h2 className="text-4xl text-gray-500 text-center pt-8 pb-5">
        You applied Jobs: {appliedJobs.length}
      </h2>
      <div className="flex justify-end container mx-auto">
        <details className="dropdown text-white justify-center">
          <summary className="m-1 btn flex items-center">
            Filter By{" "}
            <img
              className="w-6 "
              src="https://cdn-icons-png.freepik.com/256/5049/5049739.png?ga=GA1.1.540724036.1706111289&semt=ais"
              alt=""
            />
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li onClick={() => handleJobsFilter("all")}>
              <a>All</a>
            </li>
            <li onClick={() => handleJobsFilter("remote")}>
              <a>Remote</a>
            </li>
            <li onClick={() => handleJobsFilter("onsite")}>
              <a>onsite</a>
            </li>
          </ul>
        </details>
      </div>
      <div>
        {displayJobs.map((job) => (
          <AppliedJob key={job.id} job={job}></AppliedJob>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
