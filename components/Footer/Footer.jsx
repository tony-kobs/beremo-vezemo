import Logo from "@/components/Logo/Logo";
import Messengers from "@/components/Messengers/Messengers";
import { PhoneIcon } from "@/components/Icons/Icons";
import { footerColumns, phoneHref, phoneLabel } from "@/data/site";
import styles from "./Footer.module.css";

const places = [
  "Зеленодольськ",
  "Криворізький район",
  "Міжміські перевезення Україною",
];

const navLinks = footerColumns.flatMap((column) => column.links);

export default function Footer() {
  return (
    <footer className={styles.footer} id="contacts">
      <div className={`container ${styles.inner}`}>
        <div className={styles.top}>
          <div className={styles.colBrand}>
            <a
              className={styles.brand}
              href="#top"
              aria-label="Беремо й веземо"
            >
              <Logo />
            </a>

            <ul className={styles.places}>
              {places.map((place) => (
                <li key={place}>{place}</li>
              ))}
            </ul>
          </div>

          <nav className={styles.colNav} aria-label="Навігація">
            <ul className={styles.linksFlat}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>

            <div className={styles.navColumns}>
              {footerColumns.map((column) => {
                const [titleLink, ...childLinks] = column.links;

                return (
                  <div className={styles.navColumn} key={column.title}>
                    <a className={styles.columnTitle} href={titleLink.href}>
                      {column.title}
                    </a>
                    <ul className={styles.links}>
                      {childLinks.map((link) => (
                        <li key={link.href}>
                          <a href={link.href}>{link.label}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </nav>

          <div className={styles.colInfo}>
            <div className={styles.hours}>
              <p className={styles.columnTitle}>Години роботи</p>
              <p>Роб: Пн - СБ</p>
              <p>Вих: Нд</p>
            </div>

            <div className={styles.contacts}>
              <p className={styles.columnTitle}>Контакти</p>
              <a className={styles.phone} href={phoneHref}>
                <PhoneIcon className={styles.phoneIcon} />
                {phoneLabel}
              </a>

              <Messengers
                className={styles.messengers}
                itemClassName={styles.messenger}
              />
            </div>
          </div>
        </div>

        <p className={styles.copy}>© 2026 Беремо й Веземо</p>
      </div>
    </footer>
  );
}
