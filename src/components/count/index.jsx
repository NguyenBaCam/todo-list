import { useState } from "react";
import { Text } from "../text";
// props: Object
// { defaultValue = 0, step = 1 }
export function Count({ defaultValue = 0, step = 1 }) {
  // const { defaultValue = 10, step = 1 } = props;
  // Nullish coalescing operator (??)
  // const defaultValue = props.defaultValue ?? 10;
  // const step = props.step ?? 1;

  // console.log(props.defaultValue === defaultValue);
  // console.log(props.step === step);

  const [count, setCount] = useState(defaultValue);

  text(count);

  return (
    <>
      <button
        onClick={() => {
          setCount((c) => {
            return c + step;
          });
        }}
      >
        {/* <Text count={count} /> */}

        <Text as="span">{count}</Text>
        {/* {Text({ as:"span", children: count })} */}
      </button>
    </>
  );
}

function calcTotal(a, b, c, d, e, f) {
  return a + b;
}

calcTotal(1, 1);

function text(c) {
  console.log(c); // ???
}
