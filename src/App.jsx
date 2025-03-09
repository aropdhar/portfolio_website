import React from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';

const App = () => {

    const router = createBrowserRouter(
        createRoutesFromElements(
      <Route>
        <Route path='/' element={<Home/>}/>
      </Route>
    )
  );

  return (<RouterProvider router={router}/>)

 
}

export default App
