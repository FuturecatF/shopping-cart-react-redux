import './Main.css';
import React from 'react';
import Card from '../Card/Card';

function Main({ cards }) {
  return (
    <main className="content">
      <section className="goods">
        <ul className="goods__container">
          {cards.map((card) => (
            <Card card={card} key={Math.random()} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
