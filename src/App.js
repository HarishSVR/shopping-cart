import react from "react"; 
import {BrowserRouter as Router, Switch,Routes, Route} from 'react-router-dom'
import Header from "./containers/Header";
import ProductListing from "./containers/ProductListing";
import ProductDetail from "./containers/ProductDetail";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductListing/>,
  },
  {
    path: "/product/:productId",
    element: <ProductDetail/>,
  },
]);

function App() {
  return (
    <div>
      <Header/>
        <RouterProvider router={router} />
      
    </div>
  );
}

export default App;
