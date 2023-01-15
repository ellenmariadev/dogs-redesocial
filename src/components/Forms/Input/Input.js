import styles from "./input.module.css";

import React from "react";

const Input = ({ label, type, name, value, onChange, error, onBlur }) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={styles.input}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Input;
