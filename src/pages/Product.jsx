import { useParams } from "react-router-dom";

function Product() {
  const product = useParams();

  return <div>{product.id}</div>;
}

export default Product;
