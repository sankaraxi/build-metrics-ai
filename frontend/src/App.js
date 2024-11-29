import { createBrowserRouter, Outlet } from "react-router-dom"

import Results from "./components/Results"
import Home from "./components/Home"
const App = () => {
    return (
        <div className="">
          <Outlet />
        </div>
    )
  }

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children:[
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/results",
        element: <Results />,
      },
    ] 
  }
])