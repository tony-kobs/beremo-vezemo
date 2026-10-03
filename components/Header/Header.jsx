"use client";

import { useEffect, useRef, useState } from "react";
import { menu } from "@/data/site";
import CallButton from "@/components/CallButton/CallButton";
import Logo from "@/components/Logo/Logo";
import Messengers from "@/components/Messengers/Messengers";
import styles from "./Header.module.css";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [drove, setDrove] = useState(false);
  const [shift, setShift] = useState(0);
  const logoRef = useRef(null);
  const callRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (!drove) return;

    const update = () => {
      const logo = logoRef.current;
      const call = callRef.current;
      if (!logo || !call) return;
      const distance = call.offsetLeft - logo.offsetLeft - logo.offsetWidth - 16;
      setShift(Math.max(0, distance));
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [drove]);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1440px)");
    const onChange = () => {
      if (media.matches) setOpen(false);
      if (!media.matches) setDrove(false);
    };

    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  const closeMenu = () => setOpen(false);

  const onLogoClick = (event) => {
    if (window.matchMedia("(min-width: 1440px)").matches) {
      event.preventDefault();
      setDrove((value) => !value);
      return;
    }

    closeMenu();
  };

  return (
    <header className={styles.header}>
      <div className={styles.surface}>
        <div className={styles.bar}>
          <a
            ref={logoRef}
            className={styles.logoLink}
            href="#top"
            style={{ "--drive": `${drove ? shift : 0}px` }}
            aria-label="Беремо й веземо"
            aria-expanded={drove}
            onClick={onLogoClick}
          >
            <Logo driving={drove} />
          </a>

          <nav
            className={`${styles.nav} ${drove ? styles.navDriven : ""}`}
            aria-label="Головне меню"
          >
            <ul className={styles.navList}>
              {menu.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <span ref={callRef} className={styles.callSlot}>
            <CallButton className={styles.headerCall} />
          </span>

          <button
            className={styles.burger}
            type="button"
            aria-expanded={open}
            aria-label={open ? "Закрити меню" : "Відкрити меню"}
            onClick={() => setOpen((value) => !value)}
          >
            <svg
              width="24"
              height={open ? 24 : 19}
              viewBox={open ? "0 0 24 24" : "0 0 24 19"}
              fill="none"
              aria-hidden="true"
            >
              <use
                href={`/images/icons/sprite.svg#${open ? "burger-close" : "burger"}`}
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`${styles.menu} ${open ? styles.menuOpen : ""}`}
        inert={open ? undefined : true}
      >
        <div className={`container ${styles.menuInner}`}>
          <div className={styles.menuNav}>
            <h2 className={styles.menuTitle}>Меню</h2>
            <ul className={styles.menuList}>
              {menu.map((item) => (
                <li key={item.href}>
                  <a href={item.href} onClick={closeMenu}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.menuFooter}>
            <CallButton className={styles.menuCall} wide />
            <Messengers
              className={styles.menuMessengers}
              itemClassName={styles.menuMessenger}
              showLabels
            />
          </div>
        </div>
      </div>
    </header>
  );
}
