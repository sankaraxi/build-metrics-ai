import { createBrowserRouter, Outlet } from "react-router-dom"

import Results from "./components/Results"
import Home from "./components/Home"
import Header from "./components/Header"
const App = () => {
    return (
        <div className="">
          <Header />
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