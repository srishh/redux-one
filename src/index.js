import { createStore, applyMiddleware } from "redux";

const reducer = (state = { a: 0 }, action) => {
  switch (action.type) {
    case "ACTION_ONE": {
      console.log("You triggered Action 1");
      state.a += 1;
      return state;
    }

    case "ACTION_TWO": {
      console.log("You triggered Action 2");
      state.a += 2;
      return state;
    }

    case "ACTION_THREE": {
      console.log("You triggered Action 3");
      state.a += 3;
      return state;
    }

    case "ACTION_FOUR": {
      console.log("You triggered Action 4");
      state.a += 4;
      return state;
    }

    case "ACTION_FIVE": {
      console.log("You triggered Action 5");
      state.a += 5;
      return state;
    }

    default: {
      return state;
    }
  }
};

const handleMultipleActions = store => next => action => {
  if (Array.isArray(action)) {
    action.map(a => store.dispatch(a));
  } else {
    next(action);
  }
};

const middlewares = applyMiddleware(handleMultipleActions);

const store = createStore(reducer, middlewares);

store.subscribe(() => {
  console.log("Store has changed " + store.getState().a);
});

store.dispatch([
  { type: "ACTION_ONE" },
  { type: "ACTION_TWO" },
  { type: "ACTION_THREE" },
  { type: "ACTION_FOUR" },
  { type: "ACTION_FIVE" }
]);
