import React from "react";
import { connect } from "dva";
import styles from "./app.scss";

const App = () => (
  <div className={styles.page}>
    <h1>Frontend Starter Pack</h1>
  </div>
);

App.propTypes = {};

export default connect()(App);
