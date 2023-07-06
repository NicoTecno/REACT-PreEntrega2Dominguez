import { Item } from "./Item";

export const ItemList = ({ products }) =>
  products.map((producto) => <Item producto={producto} key={producto.id} />);
