import {BrowserRouter,Routes,Route} from "react-router-dom"
import { lazy } from "react";


const Home=lazy(()=>import("./pages/Home"))
const Login=lazy(()=>import("./pages/Login"))
const Groups=lazy(()=>import("./pages/Groups"))
const Chat=lazy(()=>import("./pages/Chat"))

let user=true;

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/chat/:chatId" element={<Chat/>} />
        <Route path="/groups" element={<Groups/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
