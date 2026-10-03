import { legend } from "@/data/site";
import heading from "@/styles/sectionHeading.module.css";
import plate from "@/styles/titlePlate.module.css";
import styles from "./Geography.module.css";

function LegendMark({ id }) {
  if (id === "cities" || id === "town") {
    return (
      <span className={`${styles.mark} ${styles[id]}`} aria-hidden="true">
        <span className={styles.markInner} />
      </span>
    );
  }

  if (id === "routes") {
    return (
      <span className={`${styles.mark} ${styles.routes}`} aria-hidden="true">
        <svg
          className={styles.routesIcon}
          viewBox="0 0 42 16"
          fill="none"
          aria-hidden="true"
        >
          <use href="/images/icons/sprite.svg#routes" />
        </svg>
      </span>
    );
  }

  return <span className={`${styles.mark} ${styles[id]}`} aria-hidden="true" />;
}

export default function Geography() {
  return (
    <section className={styles.section} id="geography">
      <div className="container">
        <div className={`${heading.block} ${heading.alignEnd} ${styles.heading}`}>
          <div className={`${heading.bar} ${plate.plateBase} ${plate.rightPlate}`}>
            <h2 className={`${heading.title} ${styles.title}`}>
              Географія перевезень
            </h2>
          </div>
          <p className={`${heading.lead} ${heading.leadAccent}`}>
            Веземо поруч і далі
          </p>
        </div>

        <div className={styles.layout}>
          <div className={styles.content}>
            <article className={styles.note}>
              <h3 className={styles.noteTitle}>Доставляємо вантаж</h3>
              <p>
                Працюємо в Зеленодольську та по Криворізькому району. Виконуємо
                міжміські перевезення по Україні.
              </p>
            </article>

            <ul className={styles.legend}>
              {legend.map((item) => (
                <li key={item.id} className={styles.legendItem}>
                  <LegendMark id={item.id} />
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.mapFrame}>
            <picture>
              <source
                media="(min-width: 1440px)"
                srcSet="/images/geography/desktop-1x.jpg"
              />
              <source
                media="(min-width: 768px)"
                srcSet="/images/geography/tablet-1x.jpg"
              />
              <img
                className={styles.map}
                src="/images/geography/mobile-1x.jpg"
                alt="Карта України на тлі дороги та буса"
                loading="lazy"
                decoding="async"
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
}
