import * as React from "react";
import { observer } from "mobx-react-lite";
import { PhotoCard } from "./PhotoCard";

export const App = observer(() => {
  return (
    <div className="app">
      <h1>Hello World!</h1>
      <p>Foo to the bark</p>
      <PhotoCard />
    </div>
  );
});

export default App;
