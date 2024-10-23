import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ShopPage from "../pages/ShopPage";
import ProductPage from "../pages/ProductPage";



const PageContent = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact  >
        <HomePage />
        </Route>
        <Route path="/shop" exact>
        <ShopPage />
        </Route>
        <Route path="/shop/product/:id">
          <ProductPage />
        </Route>
      </Switch>
    </>
  );
};

export default PageContent;
