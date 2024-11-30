import { createBrowserRouter, Outlet } from "react-router-dom"

import Results from "./components/Results"
import Home from "./components/Home"
import Header from "./components/Header"
import Footer from "./components/Footer"
import About from "./components/About"
import Stats from "./components/Stats"
const App = () => {
    return (
        <div className="">
          <Header />
          <Outlet />
          <Footer />
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
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/stats",
        element: <Stats />,
      },
    ] 
  }
])