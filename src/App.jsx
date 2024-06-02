import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Login from "./pages/Login";
import Editar from "./pages/Editar";
import Navbar from "./components/Navbar";
import Cadastro from "./pages/Cadastro";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="new" element= {<New/>} />
          <Route path="login" element = {<Login/>}/>
          <Route path="cadastro" element = {<Cadastro/>}/>
          <Route path="edit/:id" element={<Editar/>}/>
        </Route>
        <Route path="*" element={<h1>Essa pagina não existe!</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
