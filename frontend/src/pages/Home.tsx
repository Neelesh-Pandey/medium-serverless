import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="flexa item-center justify-center text-center flex-col">
     <div className=" font-extrabold text-4xl mt-48"> Navigate to signup page </div>
     <div>
      <Link to={`/signup`}>
        {" "}
       
        <button
          type="button"
          className="mt-8 mr-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 "
        >click</button>
       
      </Link>
      </div>
    </div>
  );
};
