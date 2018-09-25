import dva from "dva";
import createLoading from "dva-loading";
import { browserHistory } from "dva/router";
import { createLogger } from "redux-logger";
import App from "./routes/app";
// import "./index.css";

// Redux Logger Starter for DEV ENV
function startLogger() {
  if (process.env.NODE_ENV === "development") {
    return createLogger({
      collapsed: (getState, action, logEntry) => !logEntry.error
    });
  }
}

// 1. Initialize
const app = dva({
  ...createLoading({ effects: true }),
  history: browserHistory
});

// 2. Plugins
app.use({
  onAction: startLogger()
});

// 3. Model
app.model(require("./models/app").default);

// 4. Router
app.router(() => {
  return <App />;
});

// 5. Start
app.start("#root");
