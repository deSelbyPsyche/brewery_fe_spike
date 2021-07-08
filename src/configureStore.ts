import { Store, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

import rootReducer, { AppState, AppAction } from "./store/rootReducer";

export type AppDispatch = (action: AppAction) => any;

type AppStore = Store<AppState, AppAction>;

const configureStore = (): AppStore => {
  const store = createStore(rootReducer, composeWithDevTools());

  // // Hot reloading
  // // TS error fixed with https://github.com/vitaliy-bobrov/angular-hot-loader/issues/5#issuecomment-377785900
  // if ((module as any).hot) {
  //   // Enable Webpack hot module replacement for reducers
  //   (module as any).hot.accept("./store/rootReducer.ts", () => {
  //     store.replaceReducer(persistedReducer);
  //   });
  // }
  return store;
};

export default configureStore;
