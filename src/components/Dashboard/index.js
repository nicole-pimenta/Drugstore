import api from "../../services/api";
import { useEffect, useState } from "react";
import Cards from "../Cards";
import { Container } from "./styles";

const Dashboard = () => {
  const [product, setProduct] = useState([]);

  const handleProducts = () => {
    api.get("/front_end").then((response) => setProduct(response.data));
  };

  useEffect(() => {
    handleProducts();
  }, []);

  return (
    <Container>
      {product.map((product) => (
        <Cards product={product} />
      ))}
    </Container>
  );
};

export default Dashboard;
