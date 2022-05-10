import 'whatwg-fetch';
import React, {StrictMode} from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from './store';
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AppProvider } from "./custom/Context";

const root = createRoot(document.getElementById("root"))
root.render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <AppProvider>
          <App />
        </AppProvider>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);


