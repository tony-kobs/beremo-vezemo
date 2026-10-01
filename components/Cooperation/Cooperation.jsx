import { cooperation } from "@/data/site";
import CallButton from "@/components/CallButton/CallButton";
import plate from "@/styles/titlePlate.module.css";
import styles from "./Cooperation.module.css";

const icons = {
  shop: "cooperation-1",
  cargo: "cooperation-2",
  regular: "cooperation-3",
  fleet: "cooperation-4",
};

export default function Cooperation() {
  return (
    <section className={styles.section} id="service">
      <div className={`container ${styles.inner}`}>
        <div className={styles.intro}>
          <div
            className={`${styles.bar} ${plate.plateBase} ${plate.leftFlipped}`}
          >
            <h2 className={styles.title}>Постійна співпраця</h2>
          </div>
          <p className={styles.lead}>
            Доставка, на яку може розраховувати ваш бізнес
          </p>
        </div>

        <ul className={styles.list}>
          {cooperation.map((item) => (
            <li
              key={item.id}
              className={item.accent ? styles.accent : styles.item}
            >
              <div className={styles.icon}>
                <svg
                  className={item.accent ? styles.logoIcon : undefined}
                  aria-hidden="true"
                >
                  <use href={`/images/icons/sprite.svg#${icons[item.id]}`} />
                </svg>
              </div>
              <div>
                <h3 className={styles.itemTitle}>{item.title}</h3>
                <p className={styles.itemText}>{item.text}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className={styles.cta}>
          <h3 className={styles.ctaTitle}>Потрібен партнер для доставки?</h3>
          <p className={styles.ctaText}>Обговоримо умови співпраці.</p>
          <CallButton className={styles.ctaButton} wide />
        </div>

        <picture className={styles.photo}>
          <source
            media="(min-width: 1440px)"
            srcSet="/images/cooperation/desktop-1x.jpg 1x, /images/cooperation/desktop-2x.jpg 2x"
          />
          <source
            media="(min-width: 768px)"
            srcSet="/images/cooperation/tablet-1x.jpg 1x, /images/cooperation/tablet-2x.jpg 2x"
          />
          <img
            src="/images/cooperation/mobile-1x.jpg"
            srcSet="/images/cooperation/mobile-1x.jpg 1x, /images/cooperation/mobile-2x.jpg 2x"
            alt="Вантажники завантажують холодильник у бус біля магазину техніки"
            loading="lazy"
            decoding="async"
          />
        </picture>
      </div>
    </section>
  );
}
