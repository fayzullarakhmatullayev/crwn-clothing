import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./root-reducer";
import rootSaga from "./root-saga";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

export const store = createStore(
  rootReducer,
  process.env.NODE_ENV === "development"
    ? composeWithDevTools(applyMiddleware(...middlewares))
    : applyMiddleware(...middlewares)
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default { store, persistStore };
