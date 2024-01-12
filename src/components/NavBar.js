import React from "react";
import Logo from "../asus-rog-1.svg";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="flex  space-x-8 items-center pl-3 py-3 bg-zinc-800">
      <img src={Logo} className="w-[50px]" />
      <Link to="/" className="text-red-600">
        Movies
      </Link>
      <Link to="/watchlist" className="text-red-600">
        WatchList
      </Link>
    </div>
  );
}

export default NavBar;
