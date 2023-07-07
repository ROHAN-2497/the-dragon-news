import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/Category/category";
import NewsLayout from "../layouts/NewsLayout";
import News from "../pages/Home/News/News/News";
import NotFund404 from "../pages/NotFund404";
import LoginLaout from "../layouts/LoginLaout";
import Login from "../pages/Home/Login/Login";
import Register from "../pages/Home/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLaout></LoginLaout>,
    children: [
      { path: "/", element: <Navigate to="/category/0"></Navigate> },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "category",
    element: <Main></Main>,
    children: [
      {
        path: ":id",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/categories/${params.id}`),
      },
      {
        path: "*",
        element: <NotFund404></NotFund404>,
      },
    ],
  },

  {
    path: "news",
    element: <NewsLayout></NewsLayout>,
    children: [
      {
        path: ":id",
        element: <News></News>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/news/${params.id}`),
      },
    ],
  },
]);

export default router;
