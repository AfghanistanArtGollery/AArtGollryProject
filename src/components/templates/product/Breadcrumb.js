import React from "react";
import styles from "./breadcrumb.module.css";

const Breadcrumb = ({ title }) => {
  return (
    <section className={styles.breadcrumb}>
      <a href="/">Home</a>
      <span>/</span>
      <a href="/">All Items</a>
      <span>/</span>
      <p>{title}</p>
    </section>
  );
};

export default Breadcrumb;
