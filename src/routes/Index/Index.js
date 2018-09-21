import React from "react";
import { connect } from "dva";
import styles from "./styles.scss";

const Index = () => (
  <div className={styles.page}>
    <h1>Frontend Starter Pack</h1>
  </div>
);

Index.propTypes = {};

export default connect()(Index);
