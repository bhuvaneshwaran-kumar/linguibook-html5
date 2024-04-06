import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom"
import MenubarComponent from "./components/MenubarComponent"
import AppLoaderComponent from "./components/AppLoaderComponent"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { checkUserAuth } from "./thunk/auth"
import { Auth } from "./pages/Auth"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import About from "./pages/About"
import Community from "./pages/Community"

/** @Desc if user is not logged in we should not allow private pages */
function ProtectedRoute({ element }) {
  const isAuthenticated = useSelector((state) => state.localStorage.getIn(["auth", "isLogged"]));
  return isAuthenticated ? (
       element 
  ) : (
      <Navigate to="/auth/:login" replace />
  );
}

/** @Desc if user is logged in we should not allow public pages */
function RedirectRoute({ element }) {
  const isAuthenticated = useSelector((state) => state.localStorage.getIn(["auth", "isLogged"]));
  return !isAuthenticated ? (
       element 
  ) : (
      <Navigate to="/" replace />
  );
}

function App() {

  const appLoadStatus = useSelector((state) => state.localStorage.get("appLoadStatus"));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserAuth());
  }, [])

  return (
    <>
      {
        appLoadStatus.get("isLoading") ? <AppLoaderComponent /> : (
          <Router>
            <MenubarComponent />
            <Routes>
              {/* Public route */}
              <Route path="/auth/:pageDet" element={<RedirectRoute element={<Auth />} />} exact />
              <Route path="/about" element={<About />} />
              
              {/* Potected route */}
              <Route path="/" element={<ProtectedRoute element={<Home />} />} />
              <Route path="/profile" element={<ProtectedRoute element={<Profile />} />} exact />
              <Route path="/community" element={<ProtectedRoute element={<Community />} />} exact />

            </Routes>
          </Router>
        )
      }
    </>
  )
}

export default App
