import "./reset.css";
import "./styles.css";
import { fetchResponse } from "./api";
import { getState, setState } from "./state";
import { extractState } from "./logic";

fetchResponse({}).then((data) => {
  setState(extractState(data));
  console.log(getState());
});
