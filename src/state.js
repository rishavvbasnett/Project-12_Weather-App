/* Make a class to make an object with only the data we need */

let state = {};

function setState(newState) {
  state = newState;
}

function getState() {
  return { ...state };
}

export { setState, getState };
