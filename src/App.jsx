import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import Home from "./pages/Home"
import AllProducts from "./pages/AllProducts"
import Carts from "./pages/Carts"
import Navbar from "./components/Navbar"
import ProductDetails from "./pages/ProductDetails"
import ProductContextProvider from "./store/ProductStore"
import Login from "./pages/Login"
import PrivateRoute from "./components/PrivateRoute"
import Footer from "./components/Footer"
import Landing from "./pages/Landing"
import Registration from "./pages/Registration"

const App = () => {

  return (
    <ProductContextProvider>
      <BrowserRouter>
        <AppContent /> {/* 👈 App ke andar hi call kar diya */}
      </BrowserRouter>
    </ProductContextProvider>
  )
}

// alag se content component jisme useLocation ka logic hoga
const AppContent = () => {
  const location = useLocation()

  const hideLayout = location.pathname === "/" || location.pathname === "/registration" || location.pathname === "/login"


  return (
    <>
      {!hideLayout && <Navbar />}
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="registration" element={<Registration />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path="/products" element={<PrivateRoute><AllProducts /></PrivateRoute>} />
        <Route path="/carts" element={<PrivateRoute><Carts /></PrivateRoute>} />
        <Route path="/details/:id" element={<PrivateRoute><ProductDetails /></PrivateRoute>} />
      </Routes>
      {!hideLayout && <Footer />}
    </>
  )
}

export default App
