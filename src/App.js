import Home from "./Pages/Home/Home.tsx";
import { Route, Routes } from "react-router-dom";
import Products from "./Pages/Products/Products.tsx";

function App() {
  return (
    <div>
      <>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={<Products />}></Route>
        </Routes>
      </>
    </div>
  );
}

export default App;