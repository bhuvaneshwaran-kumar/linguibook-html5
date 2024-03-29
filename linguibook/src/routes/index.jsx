import { createBrowserRouter } from 'react-router-dom';
import LogIn from '../pages/Login';
import App from '../pages/App';

const router = createBrowserRouter([
    {
        path: "/login",
        element: <LogIn />,
        
    },
    {
        path: "/",
        element: <App />
    }
])

export default router;
