import { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Categories from './Components/Categories';
import CategoryActive from './Components/CategoryActive';

function App() {
  return (
    <Fragment>
      <Switch>
        <Route path="/categories" exact>
          <Categories />
        </Route>
        <Route path="/categories/:category">
          <CategoryActive />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
