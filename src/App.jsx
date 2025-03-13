import React from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import Details from './pages/details/Details';
import Rootlayout from './component/rootlayout/Rootlayout';
import WelcomePage from './welcomepage/WelcomePage';

const App = () => {

    const router = createBrowserRouter(
        createRoutesFromElements(
          <Route>
            <Route path='/' element={<WelcomePage/>}/>
             <Route element={<Rootlayout/>}>            
              <Route>
                <Route path='/home' element={<Home/>}/>
                <Route path='/Chatting_app' element={<Details/>}/>
              </Route>
            </Route>
          </Route>
    )
  );

  return (<RouterProvider router={router}/>)

 
}

export default App
