import React, { useState } from 'react';
import './style.css';

// function MyButton() {
//   return <button>I'm a button</button>;
// }
// export default function MyApp() {
//   return (
//     <div>
//       <h1>Welcome to my app</h1>
//       <MyButton />
//     </div>
//   );
// }

//
const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

// export default function ShoppingList() {
//   const listItems = products.map((product) => (
//     <li
//       key={product.id}
//       style={{
//         color: product.isFruit ? 'magenta' : 'darkgreen',
//       }}
//     >
//       {product.title}
//     </li>
//   ));
//   return <ul>{listItems}</ul>;
// }

//
// export default function MyButton() {
//   function handleClick() {
//     alert('You clicked me');
//   }
//   return <button onClick={handleClick}>Click me</button>;
// }

// function MyButton() {
//   const [count, setCount] = useState(0);

//   function handleClick() {
//     // console.log(count, setCount);
//     setCount(count + 1);
//   }
//   return <button onClick={handleClick}>Clicked {count} times</button>;
// }

// export default function MyApp() {
//   return (
//     <div>
//       <h1>Counters that update separately</h1>
//       <MyButton />
//       <MyButton />
//     </div>
//   );
// }

// function MyButton({ count, onClick }) {
//   return <button onClick={onClick}>Clicked {count} times</button>;
// }
// export default function MyApp() {
//   const [count, setCount] = useState(0);

//   function handleClick() {
//     // console.log(count, setCount);
//     setCount(count + 1);
//   }
//   return (
//     <div>
//       <h1>Counters that update separately</h1>
//       <MyButton count={count} onClick={handleClick} />
//       <MyButton count={count} onClick={handleClick} />
//     </div>
//   );
// }
