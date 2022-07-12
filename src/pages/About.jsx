import { addAndMultiply } from '../add'
import { multiplyAndAdd } from '../multiply'
import * as React from "react";

const About = () => {
  return (
    <>
      <h1>About</h1>
      <div>{addAndMultiply(1, 2, 3)}</div>
      <div>{multiplyAndAdd(1, 2, 3)}</div>
    </>
  )
}

export default About;

export const foo = () => {
  console.log('foo');
}

// if (import.meta.hot) {
//   import.meta.hot.acceptExports(['default']);
// }