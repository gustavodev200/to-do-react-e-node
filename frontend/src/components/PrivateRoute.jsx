import { useContext } from 'react';
import {Navigate, Outlet} from 'react-router-dom'
import { Context } from '../context/UserContext';


const PrivateRoute = () => {
    const {authenticated} = useContext(Context)
    console.log(authenticated)
    return ( 
        authenticated ? <Outlet /> : <Navigate to="/login"/>
     );
}
 
export default PrivateRoute;