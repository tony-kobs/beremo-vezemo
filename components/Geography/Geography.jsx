import { legend } from "@/data/site";
import styles from "./Geography.module.css";

export default function Geography() {
  return (
    <section className={styles.section} id="geography">
      <div className="container">
      <div className={styles.heading}>
        <div className={styles.bar}>
          <img className={styles.shape} src="/images/titles/plate-left.svg" alt="" />
          <h2 className={styles.title}>Географія перевезень</h2>
        </div>
        <p className={styles.lead}>Веземо поруч і далі</p>
      </div>

      <div className={styles.layout}>
        <div>
          <article className={styles.note}>
            <p>
              Працюємо в Зеленодольську та по Криворізькому району. Виконуємо
              міжміські перевезення по Україні.
            </p>
          </article>

          <ul className={styles.legend}>
            {legend.map((item) => (
              <li key={item.id} className={styles.legendItem}>
                <span className={`${styles.mark} ${styles[item.id]}`} aria-hidden="true" />
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <picture className={styles.mapFrame}>
          <source
            media="(min-width: 1440px)"
            srcSet="/images/geography/desktop-1x.jpg 1x, /images/geography/desktop-2x.jpg 2x"
          />
          <source
            media="(min-width: 768px)"
            srcSet="/images/geography/tablet-1x.jpg 1x, /images/geography/tablet-2x.jpg 2x"
          />
          <img
            className={styles.map}
            src="/images/geography/mobile-1x.jpg"
            srcSet="/images/geography/mobile-1x.jpg 1x, /images/geography/mobile-2x.jpg 2x"
            alt="Карта України на тлі дороги та буса"
          />
        </picture>
      </div>
      </div>
    </section>
  );
}
