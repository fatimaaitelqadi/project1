import React from 'react'

const product = [
  { name: 'appel', isFruit: true, id: 1 },
  { name: 'karim', isFruit: false, id: 2 },
  { name: 'banana', isFruit: true, id: 3 }
]

export default function List() {
  return (
    <ul>
      {product.map((Element) => (
        <li
          key={Element.id}  // استخدام Element.id بدلاً من indice.id
          style={{ color: Element.isFruit ? "red" : "green" }}  // تصحيح اللون باستخدام Element.isFruit
        >
          {Element.name}
        </li>
      ))}
    </ul>
  )
}
