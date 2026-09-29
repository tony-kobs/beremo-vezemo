import { phoneHref } from "@/data/site";
import styles from "./CallButton.module.css";

export default function CallButton({ className = "", wide = false }) {
  const classes = [styles.button, wide ? styles.wide : "", className]
    .filter(Boolean)
    .join(" ");

  return (
    <a className={classes} href={phoneHref}>
      Зателефонуйте
    </a>
  );
}
