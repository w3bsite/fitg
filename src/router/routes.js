import Home from "../views/Home";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/games",
    name: "Games",
    component: () => import("../views/Games")
  },
  {
    path: "/articles",
    name: "Articles",
    component: () => import("../views/Articles")
  },
  {
    path: "/web",
    name: "Web",
    component: () => import("../views/Web")
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About")
  }
];

export default routes;
