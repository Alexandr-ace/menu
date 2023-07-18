import First from "./First";
import Second from "./Second";
import styles from "./App.module.scss";
import { useState } from "react";

function App() {
  const [state, setState] = useState(true);
  const funct = (setState, state) => {
    if (state === true) {
      setState(false);
    } else {
      setState(true);
    }
  };
  return (
    <div className={styles.app}>
      <First setState={setState} state={state} funct={funct} />
      <Second state={state} />
    </div>
  );
}

export default App;
