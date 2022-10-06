import { Routes, BrowserRouter, Route } from "react-router-dom";
import { Home, List, Login, New, Single } from "./pages";
import { Navbar, Sidebar } from "./components";
import "./variables.scss";
import "./app.scss";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="main">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="users">
            <Route index element={<List />} />
            <Route path=":userId" element={<Single />} />
            <Route path="new" element={<New />} />
          </Route>
          <Route path="products">
            <Route index element={<List />} />
            <Route path=":productId" element={<Single />} />
            <Route path="new" element={<New />} />
          </Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
