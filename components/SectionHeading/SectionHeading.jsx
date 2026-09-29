import styles from "./SectionHeading.module.css";

export default function SectionHeading({ title, text, light = false, mirror = false }) {
  return (
    <div className={styles.heading}>
      <h2 className={`${styles.title} ${mirror ? styles.titleMirror : ""}`}>{title}</h2>
      {text ? <p className={light ? styles.textLight : styles.text}>{text}</p> : null}
    </div>
  );
}
