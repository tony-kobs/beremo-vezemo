import Logo from "@/components/Logo/Logo";
import {
  TelegramIcon,
  ViberIcon,
  WhatsAppIcon,
} from "@/components/Icons/Icons";
import { footerColumns, messengers, phoneHref, phoneLabel } from "@/data/site";
import styles from "./Footer.module.css";

const messengerIcons = {
  telegram: TelegramIcon,
  whatsapp: WhatsAppIcon,
  viber: ViberIcon,
};

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
              {footerColumns.map((column) => (
                <div className={styles.navColumn} key={column.title}>
                  <p className={styles.columnTitle}>{column.title}</p>
                  <ul className={styles.links}>
                    {column.links.slice(1).map((link) => (
                      <li key={link.href}>
                        <a href={link.href}>{link.label}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
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
                <svg
                  className={styles.phoneIcon}
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.2 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1L6.6 10.8Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                </svg>
                {phoneLabel}
              </a>

              <ul className={styles.messengers}>
                {messengers.map((item) => {
                  const Icon = messengerIcons[item.id];

                  return (
                    <li key={item.id}>
                      <a
                        className={styles.messenger}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={item.label}
                      >
                        <Icon />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        <p className={styles.copy}>© 2026 Беремо й Веземо</p>
      </div>
    </footer>
  );
}
