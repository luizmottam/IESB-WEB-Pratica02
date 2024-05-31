import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Login from "./pages/Login"
import History from "./pages/History";
import Navbar from "./components/Navbar";
import Cadastro from "./pages/Cadastro";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="history" element={<History />} />
          <Route path="new" element= {<New/>} />
          <Route path="login" element = {<Login/>}/>
          <Route path="cadastro" element = {<Cadastro/>}/>
        </Route>
        <Route path="*" element={<h1>Essa pagina não existe!</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
