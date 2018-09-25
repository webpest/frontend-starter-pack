import React from "react";
import { Router } from "dva/router";
// import dynamic from "dva/dynamic";
// import App from "./routes/app";

const registerModel = (app, model) => {
  if (
    !(app._models.filter(m => m.namespace === model.namespace).length === 1)
  ) {
    app.model(model);
  }
};
function RouterConfig({ history, app }) {
  const routes = [
    {
      path: "/",
      name: "IndexPage",
      getIndexRoute(nextState, cb) {
        require.ensure([], require => {
          registerModel(app, require("./models/app"));
          cb(null, require("./routes/app"));
        });
      }
    }
  ];
  return <Router history={history} path={routes} />;
}

export default RouterConfig;
