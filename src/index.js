import React from "react";
import ReactDOM from "react-dom/client";
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import App from "./App";
import { RecoilRoot } from "recoil";
import axios from "axios";
import { getAccessToken, getRefreshToken } from "./authentication/auth";

Sentry.init({
  dsn: "https://23dca314b4aa4a748f8e9f2b2ea7dc50@o4504061335109632.ingest.sentry.io/4504061336485888",
  integrations: [new BrowserTracing()],
  tracesSampleRate: 1.0,
});
axios.defaults.headers.common["accessToken"] = getAccessToken();
axios.defaults.headers.common["refreshToken"] = getRefreshToken();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RecoilRoot>
    <App />
  </RecoilRoot>
);
