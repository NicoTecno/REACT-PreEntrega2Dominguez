import cart from "../assets/carrito-de-compras.png";

const styles = {
  img: {
    height: "2rem",
    width: "auto",
    paddingLeft: 20,
  },
  span: {
    color: "red",
    paddingLeft: 5,
  },
};

export const CartWidget = () => (
  <>
    <img src={cart} style={styles.img} alt="Carrito" />{" "}
    <span style={styles.span}>0</span>
  </>
);
