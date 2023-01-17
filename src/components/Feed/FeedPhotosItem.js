import React from "react";
import styles from "./feedPhotosItem.module.css";

const FeedPhotosItem = ({ photo, setModalPhoto }) => {
  function handleClick() {
    setModalPhoto(photo);
  }

  return (
    <li className={styles.photo} onClick={handleClick}>
      <img src={photo.src} alt={photo.title} />
      <span className={styles.visualization}>{photo.acessos}</span>
    </li>
  );
};

export default FeedPhotosItem;
