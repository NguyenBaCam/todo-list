import { Text } from "../text";
import css from "./index.module.css";

export function Card({ name, price, image, id, payload, handleAddProduct }) {
  console.log({name, price, image, id})
  return (
    <>
      <div className={css.card}>
        <div className={css["card-img"]}>
          <img src={payload.image} />
        </div>

        <div className={css["card-content"]}>
          <Text as={"h2"}>{payload.name}</Text>

          <Text as="p">{payload.price}$</Text>

          <button
            onClick={() => {
              handleAddProduct(payload.id);
            }}
            className="btn btn-dark"
          >
            Add to carts
          </button>
        </div>
      </div>
    </>
  );
}
