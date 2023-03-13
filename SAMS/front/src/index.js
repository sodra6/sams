import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RecoilRoot } from "recoil";
import { createStore } from "redux"; //가운데 줄 들어가도 틀린 것 아님
import { Provider } from "react-redux"; //리액트 프로젝트에 redux 적용
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./web/view/modules";

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    {/* <RecoilRoot> */}
    <App />
    {/* </RecoilRoot>, */}
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
