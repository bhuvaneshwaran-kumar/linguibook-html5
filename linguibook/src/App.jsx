import { RouterProvider } from "react-router-dom"
import router from "./routes"
import MenubarComponent from "./components/MenubarComponent"

function App() {

  return (
    <>
      <MenubarComponent />
      {/* <RouterProvider router={router} /> */}
    </>
  )
}

export default App
