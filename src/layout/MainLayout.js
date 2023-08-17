import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./mainLayout.css";

const MainLayout = () => {
  return (
    <div className="mainLayout">
      <header className="headerContainer">
        <h1>Buta Group</h1>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/members">Members</NavLink>
          <NavLink to="/events">Events</NavLink>
          <NavLink to="/departments">Departments</NavLink>
          <NavLink to="/login">Login</NavLink>
        </nav>
      </header>
      <main className="mainContainer">
        <div>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
