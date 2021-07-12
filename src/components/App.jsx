import './App.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './Main/Main';
import Cart from './Cart/Cart';
import Header from './Header/Header';
// import { useSelector } from 'react-redux';
// настроить роуты

function App() {
	/* const [total, setTotal] = React.useState(0);
	const counterQuantity = useSelector((state) => state.cart.products);
	if (counterQuantity.length > 0) {
		const totad = counterQuantity.reduce((result, item) => result + item.quantity, 0);
		 setTotal(totad);	
	} 
	console.log(total); */

	return (
		<Switch>
			<Route exact path='/'>
				<Header />
				<Cart />
				<Main />
			</Route>
		</Switch>
	);
}

export default App;
