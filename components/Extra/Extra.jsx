import { extraServices } from "@/data/site";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import CallButton from "@/components/CallButton/CallButton";
import styles from "./Extra.module.css";

export default function Extra() {
  return (
    <section className={styles.section} id="extra">
      <div className="container">
      <SectionHeading
        title="Не лише веземо"
        text="Допоможемо з вантажем до та після перевезення."
      />

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
