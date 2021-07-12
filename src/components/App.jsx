import './App.css';
import { Switch, Route } from 'react-router-dom';
import Main from './Main/Main';
import Cart from './Cart/Cart';
import Header from './Header/Header';


function App() {
	return (
		<Switch>
			<Route exact path='/'>
				<Header />
				<Cart />
				<Main />
			</Route>
			{/* <Route exact path='/cart'>
				<Cart />
			</Route> */}
		</Switch>
	);
}

export default App;
