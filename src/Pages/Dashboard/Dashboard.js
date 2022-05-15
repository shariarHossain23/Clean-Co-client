import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div class="drawer drawer-mobile mt-16">
    <input id="dashboard-1" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content mt-4">
        <h1 className="text-purple-600 text-4xl">Dashboard</h1>
      <Outlet></Outlet>
   
    
    </div> 
    <div class="drawer-side">
      <label for="dashboard-1" class="drawer-overlay"></label> 
      <ul class="menu p-4 overflow-y-auto w-80 bg-base-200 text-base-content">
        
        <li> <NavLink to='/dashboard/add-admin'>Add-Admin</NavLink></li>
        <li> <NavLink to='/dashboard/add-service'>Add-Service</NavLink></li>
        
      </ul>
    
    </div>
  </div>
  );
};

export default Dashboard;
