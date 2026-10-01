"use client";

import { useState } from "react";
import { PhoneIcon } from "@/components/Icons/Icons";
import { phoneHref, phoneLabel } from "@/data/site";
import styles from "./CallButton.module.css";

export default function CallButton({ className = "", wide = false }) {
  const [revealed, setRevealed] = useState(false);

  const classes = [
    styles.button,
    wide ? styles.wide : "",
    revealed ? styles.revealed : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <a
      className={classes}
      href={phoneHref}
      onPointerDown={() => setRevealed(true)}
    >
      <span className={styles.labels}>
        <span className={styles.labelDefault}>Зателефонуйте</span>
        <span className={styles.labelHover} aria-hidden="true">
          Натисни мене
        </span>
        <span className={styles.labelActive} aria-hidden="true">
          <PhoneIcon className={styles.phoneIcon} />
          {phoneLabel}
        </span>
      </span>
    </a>
  );
}
