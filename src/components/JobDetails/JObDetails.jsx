import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveJobApplication } from "../../utility/localstorage";

const JObDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);
  const {
    image,
    job_description,
    job_responsibility,
    educational_requirements,
    contact_information,
    experiences,
    job_title,
    job_type,
    location,
    remote_or_onsite,
    salary,
  } = job;
  
  console.log(job);

  const handleApplyJob = () => {
    saveJobApplication(idInt);
    toast("You have applied successfully");
  };

  return (
    <div className="mt-14 lg:mt-32 container mx-auto text-black mb-10">
        <h1 className="pt-10 text-center text-7xl font-semibold">Job Detail</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-20 gap-20">
            <div className="ml-10">
                <h1 className="text-lg"><samp className="text-xl font-semibold">Job Description:</samp>{job_description}</h1>

                <h1 className="text-lg mt-10"><samp className="text-xl font-semibold"> Job Responsibility:</samp>{job_responsibility}</h1>

                <h1 className="text-lg mt-10"><samp className="text-xl font-semibold">Educational Requirements:</samp> <br />{educational_requirements}</h1>

                <h1 className="text-lg mt-10"><samp className="text-xl font-semibold">Experiences:</samp> <br />{experiences}</h1>
            </div>
            <div className="bg-slate-300 p-8 lg:w-[60%] ml-5 lg:ml-0 mr-5 lg:mr-0 rounded-md">
                <div>
                    <div>
                       <h1 className="text-2xl font-semibold">Job Details</h1>
                       <hr className="border-1 border-black" />
                    </div>
                    <div className="mt-5">
                        <h1 className="flex items-center"><img className="w-8" src="https://cdn-icons-png.freepik.com/256/3135/3135673.png?ga=GA1.1.540724036.1706111289&semt=ais" alt="" /><samp className="text-xl font-semibold">Salary:</samp><p className="text-lg font-normal">{salary}</p></h1>

                        <h1 className="flex items-center mt-5"><img className="w-8" src="https://cdn-icons-png.freepik.com/256/10567/10567164.png?ga=GA1.1.540724036.1706111289&semt=ais" alt="" /><samp className="text-xl font-semibold">Job Title:</samp><p className="text-lg font-normal">{job_title}</p></h1>
                    </div>
                </div>
                <div className="mt-10">
                    <div>
                       <h1 className="text-2xl font-semibold mb-5">Contact Information</h1>
                       <hr className="border-1 border-black" />
                    </div>
                    <div className="mt-5">
                        <h1 className="flex items-center"><img className="w-5 mr-2" src="https://cdn-icons-png.freepik.com/256/126/126523.png?ga=GA1.1.540724036.1706111289&semt=ais" alt="" /><samp className="text-xl font-semibold">Phone:</samp><p className="text-lg font-normal">{contact_information.phone}</p></h1>

                        <h1 className="flex items-center mt-5"><img className="w-6 mr-2" src="https://cdn-icons-png.freepik.com/256/4546/4546924.png?ga=GA1.1.540724036.1706111289&semt=ais" alt="" /><samp className="text-xl font-semibold">Email:</samp><p className="text-lg font-normal">{contact_information.email}</p></h1>

                        <h1 className="flex  mt-5"><img className="w-6 h-6 mr-2" src="https://cdn-icons-png.freepik.com/256/2838/2838912.png?ga=GA1.1.540724036.1706111289&semt=ais" alt="" /><samp className="text-xl font-semibold">Address:</samp><p className="text-lg font-normal">{contact_information.address}</p></h1>
                    </div>
                    <div className="mt-10">
                    <button onClick={handleApplyJob} className="btn btn-primary w-full">Apply Now</button>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </div>
    </div>
  );
};

export default JObDetails;
