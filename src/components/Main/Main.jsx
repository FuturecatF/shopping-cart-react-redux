import React from 'react';
import Card from '../Card/Card';

import { useDispatch, useSelector } from 'react-redux';
import { requestCards } from '../../redux/actions';

function Main() {
	const dispatch = useDispatch();
	const cards = useSelector((state) => state.cards.fetchedCards);

	React.useEffect(() => {
		dispatch(requestCards());
	}, [dispatch]);

	return (
		<main>
			<h2>Привет страница MAIN</h2>
			<section>
				<ul style={{ display: 'flex', rowGap: 30, columnGap: 30 }}>
					{cards.map((card) => (
						<Card card={card} key={Math.random()} />
					))}
				</ul>
			</section>
		</main>
	);
}

export default Main;
