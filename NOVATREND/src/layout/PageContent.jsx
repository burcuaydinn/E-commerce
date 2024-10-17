import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";

const PageContent = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact  >
        <HomePage />
        </Route>
      </Switch>
    </>
  );
};

export default PageContent;
