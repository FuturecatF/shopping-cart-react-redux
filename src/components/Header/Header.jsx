import React from 'react';
 import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
 import { addTotalProducts } from '../../redux/actions';
function Header() {
	const dispatch = useDispatch();
	const proDuctQuantity = useSelector((state) => state.cart.products);
	const total = proDuctQuantity.reduce((prev, next) => prev + next.quantity, 0);
    /* console.log(counterQuantity);
	const total = counterQuantity.reduce((acc, item) => acc += item.quantity, 0) */
	//console.log(total); 
    /* React.useEffect(() => {
        dispatch(addTotalProducts(total));
    }, [dispatch, total]) */
    
	//dispatch(addTotalProducts(total));
	/* const dispatch = useDispatch();

	
 
	const total = counterQuantity.reduce(
		(result, item) => result + item.quantity,
		0
	);
  //  console.log(counterQuantity);
    console.log(total);
	dispatch(addTotalProducts(total));

	const totalQuantity = useSelector((state) => state.cart.total); */
	// console.log(totalQuantity);

	return (
		<div style={{ minHeight: 300 }}>
			<h1 style={{ color: '#FF0000' }}>{total}</h1>
            <button  onClick={() => dispatch(addTotalProducts())}>Обновить тотал</button>
		</div>
	);
}

export default Header;
