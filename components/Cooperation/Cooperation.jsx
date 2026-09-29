import { cooperation } from "@/data/site";
import { BoxIcon, CartIcon, TruckIcon } from "@/components/Icons/Icons";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import CallButton from "@/components/CallButton/CallButton";
import styles from "./Cooperation.module.css";

const icons = {
  shop: CartIcon,
  cargo: BoxIcon,
  regular: TruckIcon,
};

export default function Cooperation() {
  return (
    <section className={styles.section} id="service">
      <div className={`container ${styles.inner}`}>
      <SectionHeading
        mirror
        title="Постійна співпраця"
        text="Доставка, на яку може розраховувати ваш бізнес"
      />

      <ul className={styles.list}>
        {cooperation.map((item) => {
          const Icon = icons[item.id];

          return (
            <li key={item.id} className={item.accent ? styles.accent : styles.item}>
              <div className={styles.icon}>
                {item.accent ? (
                  <img src="/images/logo.svg" width={52} height={19} alt="" />
                ) : (
                  <Icon />
                )}
              </div>
              <div>
                <h3 className={styles.itemTitle}>{item.title}</h3>
                <p className={styles.itemText}>{item.text}</p>
              </div>
            </li>
          );
        })}
      </ul>

      <div className={styles.cta}>
        <h3 className={styles.ctaTitle}>Потрібен партнер для доставки?</h3>
        <p className={styles.ctaText}>Обговоримо умови співпраці.</p>
        <CallButton wide />
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
        />
      </picture>
      </div>
    </section>
  );
}
