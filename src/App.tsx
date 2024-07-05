
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Commits from "./pages/Commits";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import HeaderMenu from "./pages/HeaderMenu";
import Issues from "./pages/Issues";
import PullRequests from "./pages/PullRequests";
import MargedPullRequests from "./pages/MergedPullRequests";

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
          path: '/issues',
          element: <Issues />,
        },
        {
          path: '/pullRequests',
          element: <PullRequests />,
        },
        {
          path: '/mergedPullRequests',
          element: <MargedPullRequests />,
        },
        {
          path: '/commits',
          element: <Commits />,
        },
      ],
    },

  ], { basename: '/watch-takahiroanno-manifest2024' });

  return (
    <RouterProvider router={router} />
  )
}

export default App
