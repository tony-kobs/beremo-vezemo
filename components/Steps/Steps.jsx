import { steps } from "@/data/site";
import heading from "@/styles/sectionHeading.module.css";
import plate from "@/styles/titlePlate.module.css";
import styles from "./Steps.module.css";

export default function Steps() {
  return (
    <section className={styles.section} id="steps">
      <div className="container">
      <div className={`${heading.block} ${styles.intro}`}>
        <div className={`${heading.bar} ${styles.bar} ${plate.plateBase} ${plate.leftFlipped}`}>
          <h2 className={`${heading.title} ${heading.titleCompact} ${styles.title}`}>
            Чотири кроки і поїхали
          </h2>
        </div>
        <p className={`${heading.lead} ${heading.leadLight} ${heading.leadEnd} ${styles.lead}`}>
          Як це працює? Все просто: телефонуєте, розповідаєте, узгоджуємо.
        </p>
      </div>

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
            <svg className={styles.arrow} aria-hidden="true">
              <use href="/images/icons/sprite.svg#steps-arrow" />
            </svg>
            <span className={styles.dot} aria-hidden="true">
              <span className={styles.dotLayer}>
                <span className={styles.dotMid}>
                  <span className={styles.dotCore} />
                </span>
              </span>
            </span>
          </li>
        ))}
      </ol>
      </div>
    </section>
  );
}
