import { Filter } from "../components/Filter";
import { SingleProduct } from "../components/SingleProduct";
import { useCart } from "../hooks/useCart";

import "./styles.css";

export const Home = () => {
  const {
    state: { products },
  } = useCart();
  // console.log(products);
  return (
    <div className="home">
      <Filter />

      <div className="productContainer">
        {products.map((product) => {
          return <SingleProduct product={product} key={product.id} />;
        })}
      </div>
    </div>
  );
};
