import Container from "react-bootstrap/Container";
import { ItemDetail } from "./ItemDetail";

// import data from "../data/Productos.json";
import data from "../data/Productos.json";
import { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
//Params
import { useParams } from "react-router-dom";

export const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const promesa = new Promise((resolve, rejected) => {
      setTimeout(() => {
        resolve(data);
      }, 2000);
    });
    promesa.then((result) => setProducts(result));
    console.log(products);
    console.log("DATA");
    console.log(data);
  }, []);

  console.log("products");
  console.log(products);
  const params = useParams();
  const categoryId = params.id;

  console.log("Category ID");
  console.log(categoryId);
  const productosFiltrados = products.filter(
    (producto) => producto.category === categoryId
  );

  return (
    <Container className="d-flex flex-row  flex-wrap mt-2 justify-content-between">
      {productosFiltrados.length == 0 ? (
        <div>Loading...</div>
      ) : (
        <ItemList products={productosFiltrados} />
      )}
    </Container>
  );
};
