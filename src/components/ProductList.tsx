import { useEffect, useState } from "react";

function ProductList({ category }: { category: string }) {
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    console.log("Adding", products, "in", category);
    setProducts(["Keyboard", "Monitor"]);
  }, [category]);

  return <div>Product List</div>;
}

export default ProductList;
