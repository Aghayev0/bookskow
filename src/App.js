import { RouterProvider } from "react-router-dom";
import { router } from "./rootes";
import "./assets/main.module.css"
function App() {
  return <RouterProvider router={router}/>
}

export default App;
