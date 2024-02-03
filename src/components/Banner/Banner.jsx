

const Banner = () => {
    return (
        <div className=" pt-10 pb-10 lg:mt-[125px] w-[90%] mx-auto grid grid-cols-1 mt-5 lg:grid-cols-2 gap-10">
        <div className="mx-auto italic lg:pt-28">
          <h1 className="text-3xl lg:text-7xl font-semibold">
            One Step <br />
            Closer To Your <br />
            <span className="text-blue-500">Dream Job</span>
          </h1>
          <p className="mt-2 lg:mt-5 sm:text-sm lg:text-xl">
            Explore thousands of job opportunities with all the <br />
            information you need. Its your future. Come find it. Manage all{" "}
            <br />
            your job application from start to finish.
          </p>
          <a href="">
            <button className="p-4 bg-blue-500 rounded-xl text-3xl font-semibold text-white mt-10 mb-5">
              Get Started
            </button>
          </a>
        </div>
        <div>
          <img
            className="w-[82%] rounded-2xl"
            src="https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?size=626&ext=jpg&ga=GA1.1.540724036.1706111289&semt=sph"
            alt=""
          />
        </div>
      </div>
    );
};

export default Banner;