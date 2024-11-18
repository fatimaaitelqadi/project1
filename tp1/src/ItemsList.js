import React from 'react'

/*export default function ItemsList({items}) {
  return (
    <div>
      <ul>
        {
            items.map((element,indice)=><li>{element.name}-{element.price}</li>)
        }
      </ul>
    </div>
  )
}*/

export default function ItemsList({items}) {
    return (
      <table border='1px solid black'>
        <thead>
            <tr>
                <td>name</td>
                <td>price</td>
            </tr>
        </thead>
        <tbody>
            {
                items.map((ele,indice)=>
                    <tr key={indice}>
                        <th>{ele.name}</th>
                        <th>{ele.price}</th>
                    </tr>
                )
            }
        </tbody>
        
      </table>
    )
  }
