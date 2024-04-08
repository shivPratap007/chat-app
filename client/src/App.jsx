import {BrowserRouter,Routes,Route} from "react-router-dom"
import { lazy } from "react";
import ProtectRoute from "./components/auth/ProtectRoute";


const Home=lazy(()=>import("./pages/Home"))
const Login=lazy(()=>import("./pages/Login"))
const Groups=lazy(()=>import("./pages/Groups"))
const Chat=lazy(()=>import("./pages/Chat"))
const NotFound=lazy(()=>import("./pages/NotFound"))

let user=true;

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectRoute user={user}><Home/></ProtectRoute>} />
        <Route path="/login" element={<ProtectRoute user={user}><Login/></ProtectRoute>} />
        <Route path="/chat/:chatId" element={<ProtectRoute user={user} ><Chat/></ProtectRoute>} />
        <Route path="/groups" element={<ProtectRoute user={user} ><Groups/></ProtectRoute>} />
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
