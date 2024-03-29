import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styles from "./home.module.scss";
import { Link } from "react-router-dom";

function Product({ product }) {
  // https://placehold.co/180x100
  return (
    <Card className={styles.product}>
      <Card.Img className={styles.image} variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text style={{ fontWeight: "bold" }}>
          Price: {product.price}$
        </Card.Text>
        <Link to="ProductDetails">view</Link>
      </Card.Body>
    </Card>
  );
}

export default Product;
