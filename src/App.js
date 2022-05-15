import { Route, Routes } from "react-router-dom";
import "./App.css";
import PrivateAdmin from "./Authnetication/PrivateAdmin";
import PrivateRoute from "./Authnetication/PrivateRoute";
import Addadmin from "./Pages/Dashboard/Addadmin";
import AddService from "./Pages/Dashboard/AddService";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Navbar from "./Pages/Shared/Navbar";
import { AuthenticationRoute } from "./Route/AuthenticationRoute";
import { publicRoute } from "./Route/Route";

function App() {
  return (
    <div className="">
      <Navbar>
        <Routes>
          {publicRoute.map(({ path, Component }, index) => (
            <Route
              key={index}
              path={path}
              element={<Component></Component>}
            ></Route>
          ))}

          <Route  element={<PrivateRoute/>}>
          {AuthenticationRoute.map(({ path, Component }, index) => (
            <Route
              key={index}
              path={path}
              element={<Component></Component>}
            ></Route>
          ))}
          </Route>

            <Route element={<PrivateAdmin></PrivateAdmin>}>
              <Route path="/dashboard" element={<Dashboard></Dashboard>}>
              <Route path="add-admin" element={<Addadmin/>}></Route>
              <Route path='add-service' element={<AddService />} />
              </Route>
            </Route>
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
