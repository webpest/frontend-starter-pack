import dva from "dva";
import createLoading from "dva-loading";
import { browserHistory } from "dva/router";
import { createLogger } from "redux-logger";
import "./index.css";

// 1. Initialize
const app = dva({
  ...createLoading({ effects: true }),
  history: browserHistory
});

// 2. Plugins
app.use({
  onAction: createLogger()
});

// 3. Model
// app.model(require('./models/example').default);

// 4. Router
app.router(require("./router").default);

// 5. Start
app.start("#root");
