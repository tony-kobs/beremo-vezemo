import CallButton from "@/components/CallButton/CallButton";
import Messengers from "@/components/Messengers/Messengers";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="top">
      <div className={`container ${styles.frame}`}>
        <div className={styles.content}>
          <div className={styles.copy}>
            <h1 className={styles.title}>
              Треба перевезти?
              <span>Беремо й веземо</span>
            </h1>
            <p className={styles.text}>
              Вантажні перевезення: меблі, техніка, особисті речі та будматеріали
              по Зеленодольську, Криворізькому району та між містами України.
            </p>
          </div>
          <div className={styles.actions}>
            <CallButton wide className={styles.callHero} />
            <Messengers
              className={styles.messengers}
              itemClassName={styles.messenger}
              showLabels
            />
          </div>
        </div>
      </div>
    </section>
  );
}
