
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Commits from "./pages/Commits";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import HeaderMenu from "./pages/HeaderMenu";
import Issues from "./pages/Issues";


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <HeaderMenu />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/commits',
          element: <Commits />,
        },
        {
          path: '/issues',
          element: <Issues />,
        },
      ],
    },

  ], { basename: '/watch-takahiroanno-manifest2024' });

  return (
    <RouterProvider router={router} />
  )
}

export default App
