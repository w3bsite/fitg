import Home from "../views/Home";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/games",
    name: "Games",
    component: () => import("../views/Games"),
  },
  {
    path: "/articles",
    name: "Articles",
    component: () => import("../views/logintest"),
  },
  {
    path: "/web",
    name: "Web",
    component: () => import("../views/Web"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About"),
  },
  {
    path: "/cart",
    name: "cartful",
    component: () => import("../views/Cart"),
  },
  {
    path: "/games/Single/:id",
    name: "single",
    props: true,
    component: () => import("../components/SingleGame"),
  },
  {
    path: "/redirect",
    name: "redirect",
    component: () => import("../components/register/redirect"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/register"),
  },
  {
    path: "/test",
    name: "Test",
    component: () => import("../views/Test"),
  },
];

export default routes;
