import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import "./index.css"
import Contact from "./pages/Contact";


function App() {
  const router=createBrowserRouter([
    {
      path: "/",
      element:<Navbar/>,
      children:[
        {index:true,
          element:<Home/>
        },
        {
          path:"/about",
            element:<About/>
          
        },
        {
          path:"/contact",
            element:<Contact/>
          
        }
      ]
    },
    {
      path: "/about",element:<About/>
    }
  ])
  return (
   <>
   <RouterProvider router={router}/>
   </>
   
  );
}

export default App;
