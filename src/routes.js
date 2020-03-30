/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Home from "views/Home/Home.js";
import AboutMe from "views/AboutMe/AboutMe.js";
import Maps from "views/examples/Maps.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";
import LandingPage from "views/LandingPage/LandingPage.js";



var routes = [
  {
    path: "/home",
    name: "Home",
    icon: "ni ni-tv-2 text-primary",
    component: Home,
    layout: "/student"
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "ni ni-planet text-blue",
    component: Icons,
    layout: "/student"
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "ni ni-pin-3 text-orange",
    component: Maps,
    layout: "/student"
  },
  {
    path: "/aboutme",
    name: "About Me",
    icon: "ni ni-single-02 text-yellow",
    component: AboutMe,
    layout: "/student"
  },
  {
    path: "/tables",
    name: "Tables",
    icon: "ni ni-bullet-list-67 text-red",
    component: Tables,
    layout: "/student"
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/student"
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/student"
  },
  {
    path: "/landingpage",
    name: "LandingPage",
    icon: "ni ni-active-40 text-blue",
    component: LandingPage,
    layout: "/auth"
  }
];
export default routes;
