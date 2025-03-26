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
import Details2 from './pages/details/details2/Details2';
import Details3 from './pages/details/details3/Details3';
import Details4 from './pages/details/details4/Details4';
import Details5 from './pages/details/details5/Details5';
import Details6 from './pages/details/details6/Details6';

const App = () => {

    const router = createBrowserRouter(
        createRoutesFromElements(
          <Route>
            <Route path='/' element={<WelcomePage/>}/>
             <Route element={<Rootlayout/>}>            
              <Route>
                <Route path='/home' element={<Home/>}/>
                <Route path='/Chatting_app' element={<Details/>}/>
                <Route path='/E-CommerceFrontend' element={<Details2/>}/>
                <Route path='/E-CommerceBackend' element={<Details3/>}/>
                <Route path='/finsweet' element={<Details4/>}/>
                <Route path='/elearning' element={<Details5/>}/>
                <Route path='/dashboard' element={<Details6/>}/>
              </Route>
            </Route>
          </Route>
    )
  );

  return (<RouterProvider router={router}/>)

 
}

export default App
