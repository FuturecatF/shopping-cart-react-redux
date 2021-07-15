import './App.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from '../Main/Main';
import Cart from '../Cart/Cart';
import Header from '../Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { requestCards } from '../../redux/actions';

function App() {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.cards.fetchedCards);

  React.useEffect(() => {
    dispatch(requestCards());
  }, [dispatch]);

  return (
    <div className="page">
      <div className="page__container">
        <Header />
        <Switch>
          <Route exact path="/">
            <Main cards={cards} component={Main}/>
          </Route>
          <Route path="/cart">
            <Cart dispatch={dispatch} />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
