import "./App.css";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { useAuth } from "./components/utils/AuthProvider";
import Layout from "./components/layout/Layout";
import HomePage from "./components/routes/HomePage";
import AboutPage from "./components/routes/AboutPage";
import ContactPage from "./components/routes/ContactPage";
import AgentPage from "./components/routes/AgentPage";
import ListPage from "./components/listpage/ListPage";
import SinglePage from "./components/single-item-page/SinglePage";
import Signin from "./components/signin/Signin";
import Signup from "./components/signup/Signup";
import Profile from "./components/profile/Profile";
import ProtectedRoute from "./components/protected_route/ProtectedRoute";

function App() {
  const { isLoggedIn } = useAuth();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/signin", element: isLoggedIn ? <Navigate to="/" /> : <Signin /> },
        { path: "/signup", element: isLoggedIn ? <Navigate to="/" /> : <Signup /> },
        { path: "/list", element: <ListPage /> },
        { path: "/list/:_id", element: <SinglePage /> },
        { path: "/about", element: <AboutPage /> },
        { path: "/contact", element: <ContactPage /> },
        { path: "/agents", element: <AgentPage /> },
        {
          path: "/profile",
         element: (
           <ProtectedRoute>
             <Profile />
            </ProtectedRoute>
             ),
        }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
