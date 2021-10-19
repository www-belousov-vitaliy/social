import React from "react";
import { useForm } from "react-hook-form";
import styles from "./Search.module.css";

const Search = (props) => {
  const { watch, register, handleSubmit } = useForm();
  const onSubmit = () => {
    props.handleSubmit(watch("input"));
  };
  return (
    <div className={styles.search}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <input
          className={styles.input}
          {...register("input")}
          type="search"
          placeholder="search"
        />
      </form>
    </div>
  );
};

export default Search;