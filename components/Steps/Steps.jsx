import { steps } from "@/data/site";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import styles from "./Steps.module.css";

export default function Steps() {
  return (
    <section className={styles.section} id="steps">
      <div className="container">
      <SectionHeading
        light
        mirror
        title="Чотири кроки — і поїхали!"
        text="Як це працює? Все просто: телефонуєте, розповідаєте, узгоджуємо."
      />

      <ol className={styles.list}>
        {steps.map((step) => (
          <li key={step.number} className={styles.item}>
            <article className={styles.card}>
              <h3 className={styles.cardTitle}>
                <span>{step.number}</span>
                {step.title}
              </h3>
              <p className={styles.cardText}>{step.text}</p>
            </article>
            <span className={styles.dot} aria-hidden="true" />
          </li>
        ))}
      </ol>
      </div>
    </section>
  );
}
