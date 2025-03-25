import Button from "./Button";

interface Products {
  id: number;
  title: string;
  price: number;
}

interface Props {
  allCartItems: Products[];
  onClear: () => void;
}

function Cart({ allCartItems, onClear }: Props) {
  return (
    <>
      <h3>Products</h3>
      <ul>
        {allCartItems.map((product) => (
          <li key={product.id}>
            Product Name:{product.title} Price:{product.price}
          </li>
        ))}
      </ul>
      <button onClick={onClear}>Clear Cart</button>
    </>
  );
}

export default Cart;
