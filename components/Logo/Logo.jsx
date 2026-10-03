import styles from "./Logo.module.css";

export default function Logo({ driving = false }) {
  return (
    <svg
      className={driving ? `${styles.mark} ${styles.driving}` : styles.mark}
      width="72"
      height="26"
      viewBox="0 0 72 26"
      fill="none"
      aria-hidden="true"
    >
      <use href="/images/icons/sprite.svg#logo" />
      <g className={styles.wheel}>
        <use href="/images/icons/sprite.svg#logo-wheel" />
      </g>
    </svg>
  );
}
