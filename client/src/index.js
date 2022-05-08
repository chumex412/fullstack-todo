import React, {StrictMode} from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from './store';
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const root = createRoot(document.getElementById("root"))
root.render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>
);


