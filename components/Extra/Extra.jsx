"use client";

import { extraServices } from "@/data/site";
import CallButton from "@/components/CallButton/CallButton";
import styles from "./Extra.module.css";

const canFollowPointer = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(hover: hover) and (pointer: fine)").matches;

function handlePointerMove(event) {
  if (!canFollowPointer()) return;

  const card = event.currentTarget;
  const rect = card.getBoundingClientRect();
  const x = ((event.clientX - rect.left) / rect.width) * 100;
  const y = ((event.clientY - rect.top) / rect.height) * 100;

  card.style.setProperty("--gx", `${x}%`);
  card.style.setProperty("--gy", `${y}%`);
}

function handlePointerLeave(event) {
  if (!canFollowPointer()) return;

  event.currentTarget.style.setProperty("--gx", "7.18%");
  event.currentTarget.style.setProperty("--gy", "15.74%");
}

export default function Extra() {
  return (
    <section className={styles.section} id="extra">
      <div className="container">
        <div className={styles.heading}>
          <div className={styles.bar}>
            <img
              className={styles.shape}
              src="/images/titles/plate-left.svg"
              alt=""
            />
            <h2 className={styles.title}>Не лише веземо</h2>
          </div>
          <p className={styles.lead}>
            Допоможемо з вантажем до та після перевезення.
          </p>
        </div>

        <ul className={styles.list}>
          {extraServices.map((item) => (
            <li
              key={item.title}
              className={styles.card}
              onPointerMove={handlePointerMove}
              onPointerLeave={handlePointerLeave}
            >
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardText}>{item.text}</p>
            </li>
          ))}
        </ul>

        <div className={styles.cta}>
          <h3 className={styles.ctaTitle}>Потрібна допомога з перевезенням?</h3>
          <p className={styles.ctaText}>
            Зателефонуйте — уточнимо деталі та домовимося про зручний час.
          </p>
          <CallButton className={styles.ctaButton} wide />
        </div>
      </div>
    </section>
  );
}
