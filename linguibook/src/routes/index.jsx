import { Navigate, createBrowserRouter } from 'react-router-dom';
import { Auth } from '../pages/Auth.jsx';
import { useSelector } from 'react-redux';
import Home from '../pages/Home.jsx';
import Profile from '../pages/Profile.jsx';

function ProtectedRoute({ element }) {
    const isAuthenticated = useSelector((state) => state.localStorage.get(["auth", "isLogged"]));

    return isAuthenticated ? (
        { element }
    ) : (
        <Navigate to="/auth" replace />
    );
}

const router = createBrowserRouter([
    {
        path: "/auth",
        element: <Auth />
    },
    {   
        path: "/",
        element: <ProtectedRoute element={<Home />} />
    },
    {   
        path: "/profile",
        element: <ProtectedRoute element={<Profile />} />
    }
])

export default router;
