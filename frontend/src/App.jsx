import './App.css'
import ListPage from './components/listpage/ListPage';
import Layout from './components/layout/Layout';
import HomePage from './components/routes/HomePage';
import AboutPage from "../src/components/routes/AboutPage"
import ContactPage from "../src/components/routes/ContactPage"
import AgentPage from "../src/components/routes/AgentPage"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SinglePage from './components/single-item-page/SinglePage';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/list",
          element: <ListPage />,
        },
        {
          path: "/list/:_id",
          element: <SinglePage />
        },
        {
          path: "/about",
          element: <AboutPage />,
        },,
        {
          path: "/contact",
          element: <ContactPage />,
        },,
        {
          path: "/agents",
          element: <AgentPage />,
        },
        
      ],
    },
  ]);
  
  return (
    <RouterProvider router={router}/>
  );
}
export default App
