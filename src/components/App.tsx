import * as React from "react";
import { hot } from "react-hot-loader";
import { observer } from "mobx-react-lite";

export const App = observer(() => {
  return <h1>Hello world</h1>;
});

declare let module: Record<string, unknown>;

export default hot(module)(App);
