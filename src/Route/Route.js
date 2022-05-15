import Contact from "../Pages/Contact"
import Home from "../Pages/Home/Home"
import Login from "../Pages/Home/Login"


export const publicRoute =[
    { path: "/", pathName: "Home", Component: Home },
    { path: "/contact", pathName: "Contact", Component: Contact },
    { path: "/login", pathName: "login", Component: Login },

]