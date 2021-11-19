import { BrowserRouter, Switch, Route } from "react-router-dom";
import Subscreen from "./components/Subscreen";
import Success from "./components/Success";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Subscreen />
        </Route>
        <Route exact path="/success">
          <Success />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
