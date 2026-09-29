import { extraServices } from "@/data/site";
import CallButton from "@/components/CallButton/CallButton";
import styles from "./Extra.module.css";

export default function Extra() {
  return (
    <section className={styles.section} id="extra">
      <div className="container">
      <div className={styles.heading}>
        <div className={styles.bar}>
          <img className={styles.shape} src="/images/titles/plate-left.svg" alt="" />
          <h2 className={styles.title}>Не лише веземо</h2>
        </div>
        <p className={styles.lead}>Допоможемо з вантажем до та після перевезення.</p>
      </div>

      <ul className={styles.list}>
        {extraServices.map((item) => (
          <li key={item.title} className={styles.card}>
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
        <CallButton wide />
      </div>
      </div>
    </section>
  );
}
