import LandingPage from "views/LandingPage/LandingPage.js";
import AdvisorLogin from "views/Login/AdvisorLogin.js";
import StudentLogin from 'views/Login/StudentLogin.js';
import StudentSignup from "views/Signup/StudentSignup.js";

var routes = [
  {
    path: "/landingpage",
    name: "LandingPage",
    icon: "ni ni-active-40 text-blue",
    component: LandingPage,
    layout: "/auth"
  },
  {
    path: "/advisor/login",
    name: "AdvisorLogin",
    icon: "ni ni-active-40 text-blue",
    component: AdvisorLogin,
    layout: "/auth"
  },
  {
    path: "/student/login",
    name: "StudentLogin",
    icon: "ni ni-active-40 text-blue",
    component: StudentLogin,
    layout: "/auth"
  },
  {
    path: "/student/signup",
    name: "StudentSignup",
    icon: "ni ni-active-40 text-blue",
    component: StudentSignup,
    layout: "/auth"
  }

];
export default routes;
