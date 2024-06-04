import { useContext } from "react";
import { BrowserRouter, Route, Navigate, Routes} from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Login from "./pages/Login";
import Editar from "./pages/Editar";
import Navbar from "./components/Navbar";
import Cadastro from "./pages/Cadastro";
import { AuthContext } from "./contexts/AuthContext";
import "./App.css";
import { ProtectedRoute } from "./routes/ProtectedRoute";

function App() {

  const { user } = useContext(AuthContext)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/cadastro" element={<Cadastro/>}/>
        
        <Route path="/" element={<ProtectedRoute><Navbar /></ProtectedRoute>}>
          <Route index element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/new" element={<ProtectedRoute><New /></ProtectedRoute>} />
          <Route path="/edit/:id" element={<ProtectedRoute><Editar /></ProtectedRoute>} />
        </Route>

        <Route path='*' element={<h1>Essa pagina não existe!</h1>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
