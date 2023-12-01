/* @refresh reload */
import { render } from "solid-js/web";

import { Router } from "@solidjs/router";
import App from "./App";
import '@/assets/styles/index.scss'
// main.ts
import 'virtual:uno.css'

const root = document.getElementById("root");

render(
  () => (
    <Router>
      <App />
    </Router>
  ),

  root!
);
