import{
  BrowserRouter,
  Routes,
  Route
}from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/messenger/Login" element={<Login/>}></Route>
        <Route path="/messenger/Register" element={<Register/>}>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
} 

export default App;

