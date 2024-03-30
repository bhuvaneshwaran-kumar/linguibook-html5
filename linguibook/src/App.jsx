import { RouterProvider } from "react-router-dom"
import router from "./routes"
import MenubarComponent from "./components/MenubarComponent"
import { useState } from "react"
import AppLoaderComponent from "./components/AppLoaderComponent"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { checkUserAuth } from "./thunk/auth"


function App() {

  const appLoadStatus = useSelector((state) => state.localStorage.get("appLoadStatus"));
  const dispatch = useDispatch();


  useEffect(() => {
    const isAuthenticated = dispatch(checkUserAuth());
  }, [])

  return (
    <>
      {
        appLoadStatus.get("isLoading") ? <AppLoaderComponent /> : (
          <>
            <MenubarComponent />
            <RouterProvider router={router} />
          </>
        )
      }
    </>
  )
}

export default App
