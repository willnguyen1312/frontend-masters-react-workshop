import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./Workshop";
import { QueryClientProvider, QueryClient } from "react-query";
import * as serviceWorker from "./serviceWorker";

// import { inspect } from "@xstate/inspect";

// inspect({ iframe: false });

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
