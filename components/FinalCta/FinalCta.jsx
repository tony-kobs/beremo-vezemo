import CallButton from "@/components/CallButton/CallButton";
import styles from "./FinalCta.module.css";

export default function FinalCta() {
  return (
    <section className={styles.section}>
      <div className="container">
      <h2 className={styles.title}>
        Треба перевезти?
        <span>Беремо й веземо.</span>
      </h2>
      <p className={styles.text}>
        Розкажіть, що потрібно перевезти та куди — узгодимо деталі й домовимося
        про поїздку.
      </p>
      <CallButton wide />
      </div>
    </section>
  );
}
