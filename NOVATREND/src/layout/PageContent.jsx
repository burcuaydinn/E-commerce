import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ShopPage from "../pages/ShopPage";
import ProductPage from "../pages/ProductPage";
import ContactPage from "../pages/ContactPage";



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
        <Route path="/contact">
          <ContactPage />
        </Route>
      </Switch>
    </>
  );
};

export default PageContent;
