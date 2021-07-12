import React from "react";
import Card from '../Card/Card'

import { useDispatch, useSelector } from 'react-redux'
import { requestCards } from '../../redux/actions';

function Main(/* { addToCart } */) {

   /* console.log(addToCart); */
   const dispatch = useDispatch()
   const cards = useSelector(state => state.cards.fetchedCards)
  // const addId = cards.map((item) => item.id = Math.random())
    React.useEffect(() => {
    dispatch(requestCards())
   }, [dispatch]) 
/* dispatch(addProductsToCart(addItemToCart)); */
/* function addToCart(card) {
    console.log(card);
} */

      /*  const addItemToCart = addToCart(card); */
 /*console.log(addItemToCart)  */
   
    return (
        <main>
<h2>Привет страница MAIN</h2>
<section>

<ul style={{ display: 'flex', rowGap: 30, columnGap: 30 }}>
{cards.map((card) => (
    <Card 
    card={card}
    key={Math.random()}
    /* addToCart={addToCart}  */
    />
))}
</ul>
</section>
</main>
    )
}

export default Main;