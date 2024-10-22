import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ShopPage from "../pages/ShopPage";


const PageContent = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact  >
        <HomePage />
        </Route>
        <Route path="/shop">
        <ShopPage />
        </Route>
      </Switch>
    </>
  );
};

export default PageContent;
