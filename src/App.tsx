import { add, multiply } from "./hello.gleam";

function App() {
  return <main>{multiply(add(1, 2), 2)}</main>;
}

export default App;
