import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function FirstPage() {
  const { currentUser } = useSelector((state) => state.users);

  return (
    <div>
      {/* Navbar */}
      <nav className="flex justify-between items-center bg-primary text-white px-5 py-5">
        <div>
          <h1 className="text-4xl">
          <Link to="/" className="text-white no-underline hover:text-white hover:underline">
              Little Help
            </Link>
          </h1>
        </div>
        <div className="flex items-center gap-5 ">
          <Link to="/login" className="text-xl text-white no-underline">
            Login
          </Link>
          <Link to="/register" className="text-xl text-white no-underline">
            Register
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <section className=" text-black px-5 py-10">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-8">Importance of Blood and Blood Banks</h2>
          <p className="text-lg mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac neque ultricies, porttitor dolor ut, fringilla turpis. Mauris sollicitudin efficitur tortor, vel sagittis mi aliquet a. Nullam egestas, dolor sed vehicula sollicitudin, ex ligula aliquet orci, ac iaculis metus elit in nunc. Nullam sit amet orci non dui feugiat tempus id ac lacus.
          </p>
          <h2 className="text-4xl font-bold mb-8">Emergency Requirements Form</h2>
          <form>
            <div className="flex flex-col mb-6">
              <label htmlFor="name" className="text-xl mb-2">Your Name</label>
              <input type="text" id="name" className="py-2 px-4 rounded border-gray-300 focus:outline-none focus:ring focus:border-blue-500" />
            </div>
            <div className="flex flex-col mb-6">
              <label htmlFor="email" className="text-xl mb-2">Your Email</label>
              <input type="email" id="email" className="py-2 px-4 rounded border-gray-300 focus:outline-none focus:ring focus:border-blue-500" />
            </div>
            {/* Additional form fields */}
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default FirstPage;

