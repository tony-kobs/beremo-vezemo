"use client";

import { useState } from "react";
import { PhoneIcon } from "@/components/Icons/Icons";
import { phoneHref, phoneLabel } from "@/data/site";
import styles from "./CallButton.module.css";

const isDesktopLike = () =>
  window.matchMedia("(min-width: 768px)").matches;

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
      onPointerDown={() => {
        if (!isDesktopLike()) setRevealed(true);
      }}
      onClick={(event) => {
        if (!isDesktopLike()) return;
        event.preventDefault();
        setRevealed(true);
      }}
      onPointerLeave={() => {
        if (isDesktopLike()) setRevealed(false);
      }}
    >
      <span className={styles.labels}>
        <span className={styles.labelDefault} aria-hidden={revealed}>
          Зателефонуйте
        </span>
        <span className={styles.labelHover} aria-hidden="true">
          Натисни мене
        </span>
        <span className={styles.labelActive} aria-hidden={!revealed}>
          <PhoneIcon className={styles.phoneIcon} />
          {phoneLabel}
        </span>
      </span>
    </a>
  );
}
