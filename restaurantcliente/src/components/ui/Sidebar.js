import React from "react";
import { NavLink } from "react-router-dom";

//md medium, lg large, sm small , xs super small y xl para una pantalla grande
//md:w-2/5 en una pantalla mediana divide la pantalla en 5 y toma 2 partes .
//xl:w-1/5 en una pantalla grande divide la pantalla en 5 y toma 1 parte
//p-6 es padding:6
const Sidebar = () => {
  return (
    <div className="md:w-2/5 xl:w-1/5 bg-gray-800">
      <div className="p-6">
        <p className="uppercase text-white text-2xl tracking-wide text-center font-bold">
          RestaurantApp
        </p>
        <p className="mt-3 text-gray-600">
          Administra tu restaurant en las siguientes opciones:
        </p>
        <nav>
          <NavLink
            className="p-1 text-gray-400 block hover:bg-yellow-500 hover:text-gray-900"
            activeClassName="text-yellow-500"
            exact="true"
            to="/"
            end={true}
          >
            Ordenes
          </NavLink>
          <NavLink
            className="p-1 text-gray-400 block hover:bg-yellow-500 hover:text-gray-900"
            activeClassName="text-yellow-500"
            exact="true"
            to="/menu"
          >
            Menú
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
