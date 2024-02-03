import { Link } from "react-router-dom";


const CategoryList = () => {
    const id = 5;
    return (
        <div className='bg-white pt-4 lg:pt-20 pb-1'>
            <h1 className=' text-2xl lg:text-7xl text-center font-semibold '>Job Category List</h1>
            <p className='mt-2 lg:mt-5 text-center text-gray-700 lg:text-xl'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid grid-cols-1 lg:grid-cols-4 mt-4 lg:mt-10 container mx-auto mb-20'>
                <div className='mx-auto mb-5 w-[311px] h-[243px] bg-slate-300 pl-10 pt-10 pb-10 p rounded-lg'>
                    <img className='w-14' src="https://cdn-icons-png.freepik.com/256/11160/11160893.png?ga=GA1.1.540724036.1706111289&semt=ais" alt="" />
                    <h1 className='mt-10 text-2xl font-semibold'>Account & Finance</h1>
                    <p className='mt-5 text-lg'>300 Jobs Available</p>
                </div>
                <div className='mx-auto mb-5 w-[311px] h-[243px] bg-slate-300 pl-10 pt-10 pb-10 p rounded-lg'>
                    <img className='w-14' src="https://cdn-icons-png.freepik.com/256/566/566359.png?ga=GA1.1.540724036.1706111289&semt=ais" alt="" />
                    <h1 className='mt-10 text-2xl font-semibold'>Account & Finance</h1>
                    <p className='mt-5 text-lg'>300 Jobs Available</p>
                </div>
                <div className='mx-auto mb-5 w-[311px] h-[243px] bg-slate-300 pl-10 pt-10 pb-10 p rounded-lg'>
                    <img className='w-14' src="https://cdn-icons-png.freepik.com/256/1997/1997897.png?ga=GA1.1.540724036.1706111289&semt=ais" alt="" />
                    <h1 className='mt-10 text-2xl font-semibold'>Account & Finance</h1>
                    <p className='mt-5 text-lg'>300 Jobs Available</p>
                </div>
                <div className='mx-auto mb-5 w-[311px] h-[243px] bg-slate-300 pl-10 pt-10 rounded-lg'>
                    <img className='w-14' src="https://cdn-icons-png.freepik.com/256/2098/2098127.png?ga=GA1.1.540724036.1706111289&semt=ais" alt="" />
                    <h1 className='mt-10 text-2xl font-semibold'>Account & Finance</h1>
                    <p className='mt-5 text-lg'>300 Jobs Available</p>
                </div>                
            </div>
        </div>
    );
};

export default CategoryList;