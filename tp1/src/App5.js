import React from 'react'
import ItemsList from './ItemsList'
export default function App5() {
    const items = [
        { name: 'Article 1', price: 10 },
        { name: 'Article 2', price: 20 },
        { name: 'Article 3', price: 30 },
        { name: 'Article 4', price: 40 }
    ];
  return (
    <div>
      <ItemsList items={items} />
    </div>
  )
}
