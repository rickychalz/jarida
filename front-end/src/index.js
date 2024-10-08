import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./store";
import { Provider } from "react-redux";
import {QueryClientProvider, QueryClient} from '@tanstack/react-query';
//import "tw-elements-react/dist/css/tw-elements-react.min.css";


const queryClient = new QueryClient()
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
      <App />
      </QueryClientProvider>
    </Provider>
  
);
