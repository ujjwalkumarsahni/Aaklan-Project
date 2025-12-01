import { NavLink, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets.js';

const Navbar = () => {
  const navigate = useNavigate();

  const logout = () => {
    navigate('/');
  };

  return (
    <div className="flex justify-between items-center px-6 py-4 bg-white shadow-sm dark:bg-gray-900">
      
      {/* Left Logo */}
      <div className="flex items-center gap-2">
        <img
          className="w-36 cursor-pointer"
          src={assets.admin_logo}
          alt="Admin Logo"
        />
        <span className="text-sm px-3 py-1 rounded-full border border-gray-400 text-gray-600 dark:text-white">
          Admin
        </span>
      </div>

      {/* Center Navigation */}
      <ul className="flex gap-6 text-gray-700 dark:text-gray-200">
        {/* <NavLink
          to="/admin-dashboard"
          className={({ isActive }) =>
            `px-3 py-2 rounded-md transition ${
              isActive ? 'bg-blue-600 text-white' : 'hover:bg-gray-200 dark:hover:bg-gray-700'
            }`
          }
        >
          Dashboard
        </NavLink> */}

        <NavLink
          to="/hiring-detail"
          className={({ isActive }) =>
            `px-3 py-2 rounded-md transition ${
              isActive ? 'bg-blue-600 text-white' : 'hover:bg-gray-200 dark:hover:bg-gray-700'
            }`
          }
        >
          Hiring Details
        </NavLink>

        <NavLink
          to="/add-job"
          className={({ isActive }) =>
            `px-3 py-2 rounded-md transition ${
              isActive ? 'bg-blue-600 text-white' : 'hover:bg-gray-200 dark:hover:bg-gray-700'
            }`
          }
        >
          Add Job
        </NavLink>

        <NavLink
          to="/job-list"
          className={({ isActive }) =>
            `px-3 py-2 rounded-md transition ${
              isActive ? 'bg-blue-600 text-white' : 'hover:bg-gray-200 dark:hover:bg-gray-700'
            }`
          }
        >
          Job List
        </NavLink>
        <NavLink
          to="/Query-detail"
          className={({ isActive }) =>
            `px-3 py-2 rounded-md transition ${
              isActive ? 'bg-blue-600 text-white' : 'hover:bg-gray-200 dark:hover:bg-gray-700'
            }`
          }
        >
          Query Detail
        </NavLink>
      </ul>

      {/* Logout Button */}
      <button
        onClick={logout}
        className="bg-blue-600 text-white text-sm px-6 py-2 rounded-full hover:bg-blue-700 transition"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
