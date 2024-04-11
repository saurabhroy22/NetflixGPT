import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Browse from './Browse';
import Login from './Login';
import MoviesCardDetails from './MoviesCardDetails';



const Body=()=>{

    const appRouter=createBrowserRouter([
        {
            path:'/',
            element:<Login/>
        },
        {
            path:'/browse',
            element:<Browse/>
        },
        {
            path:'/browse/:movieId',
            element:<MoviesCardDetails/>
        }
    ]);

    
    return (<div>
        <RouterProvider router={appRouter}/>
    </div>)
};

export default Body;