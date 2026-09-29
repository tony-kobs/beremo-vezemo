import { footerColumns, phoneHref, phoneLabel } from "@/data/site";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer} id="contacts">
      <div className="container">
      <div className={styles.top}>
        <div className={styles.brand}>
          <img src="/images/logo.svg" width={72} height={26} alt="Беремо й веземо" />
          <p>Зеленодольськ</p>
          <p>Криворізький район</p>
          <p>Міжміські перевезення Україною</p>
        </div>

        {footerColumns.map((column) => (
          <nav key={column.title} aria-label={column.title}>
            <ul className={styles.links}>
              {column.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div>
          <p className={styles.columnTitle}>Години роботи</p>
          <p>Роб: Пн - СБ</p>
          <p>Вих: Нд</p>
        </div>

        <div>
          <p className={styles.columnTitle}>Контакти</p>
          <a href={phoneHref}>{phoneLabel}</a>
        </div>
      </div>

      <p className={styles.copy}>© 2026 Беремо й Веземо</p>
      </div>
    </footer>
  );
}
