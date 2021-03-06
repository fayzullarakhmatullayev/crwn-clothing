import { createStore } from "redux";
import { persistStore } from "redux-persist";

import rootReducer from "./root-reducer";
let middleware;
if (process.env.NODE_ENV === "development") {
  middleware =
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__();
}

export const store = createStore(rootReducer, middleware);

export const persistor = persistStore(store);

export default { store, persistor };
