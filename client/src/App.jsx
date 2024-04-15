import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Suspense, lazy } from "react";
import ProtectRoute from "./components/auth/ProtectRoute";
import LayoutLoder from "./components/layout/Loders";


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
        <Route path="/" element={<Suspense fallback={<LayoutLoder></LayoutLoder>}><ProtectRoute user={user}><Home/></ProtectRoute></Suspense>} />
        <Route path="/login" element={<Suspense fallback={<LayoutLoder></LayoutLoder>}><ProtectRoute user={user}><Login/></ProtectRoute></Suspense>} />
        <Route path="/chat/:chatId" element={<Suspense fallback={<LayoutLoder></LayoutLoder>}><ProtectRoute user={user}><Chat/></ProtectRoute></Suspense>} />
        <Route path="/groups" element={<Suspense fallback={<LayoutLoder></LayoutLoder>}><ProtectRoute user={user}><Groups/></ProtectRoute></Suspense>} />
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
