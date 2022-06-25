
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/products/*" element={<ProductList />}  />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;