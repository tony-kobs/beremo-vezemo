"use client";

import { useEffect, useRef, useState } from "react";
import { menu } from "@/data/site";
import CallButton from "@/components/CallButton/CallButton";
import Logo from "@/components/Logo/Logo";
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
            className={`${styles.nav} ${drove ? styles.navShown : ""}`}
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
            {open ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M5 5L19 19M19 5L5 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg
                width="24"
                height="19"
                viewBox="0 0 24 19"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M1.6 0C1.17565 0 0.768687 0.16462 0.468629 0.457646C0.168571 0.750671 0 1.1481 0 1.5625C0 1.9769 0.168571 2.37433 0.468629 2.66735C0.768687 2.96038 1.17565 3.125 1.6 3.125H1.6128C2.03715 3.125 2.44411 2.96038 2.74417 2.66735C3.04423 2.37433 3.2128 1.9769 3.2128 1.5625C3.2128 1.1481 3.04423 0.750671 2.74417 0.457646C2.44411 0.16462 2.03715 0 1.6128 0H1.6ZM6.7072 0.625C6.45259 0.625 6.20841 0.723772 6.02838 0.899587C5.84834 1.0754 5.7472 1.31386 5.7472 1.5625C5.7472 1.81114 5.84834 2.0496 6.02838 2.22541C6.20841 2.40123 6.45259 2.5 6.7072 2.5H22.0672C22.3218 2.5 22.566 2.40123 22.746 2.22541C22.9261 2.0496 23.0272 1.81114 23.0272 1.5625C23.0272 1.31386 22.9261 1.0754 22.746 0.899587C22.566 0.723772 22.3218 0.625 22.0672 0.625H6.7072ZM6.7072 15.625C6.45259 15.625 6.20841 15.7238 6.02838 15.8996C5.84834 16.0754 5.7472 16.3139 5.7472 16.5625C5.7472 16.8111 5.84834 17.0496 6.02838 17.2254C6.20841 17.4012 6.45259 17.5 6.7072 17.5H22.0672C22.3218 17.5 22.566 17.4012 22.746 17.2254C22.9261 17.0496 23.0272 16.8111 23.0272 16.5625C23.0272 16.3139 22.9261 16.0754 22.746 15.8996C22.566 15.7238 22.3218 15.625 22.0672 15.625H6.7072ZM5.7472 9.0625C5.7472 8.81386 5.84834 8.5754 6.02838 8.39959C6.20841 8.22377 6.45259 8.125 6.7072 8.125H22.0672C22.3218 8.125 22.566 8.22377 22.746 8.39959C22.9261 8.5754 23.0272 8.81386 23.0272 9.0625C23.0272 9.31114 22.9261 9.5496 22.746 9.72541C22.566 9.90123 22.3218 10 22.0672 10H6.7072C6.45259 10 6.20841 9.90123 6.02838 9.72541C5.84834 9.5496 5.7472 9.31114 5.7472 9.0625ZM0 9.0625C0 8.2 0.7168 7.5 1.6 7.5H1.6128C2.03715 7.5 2.44411 7.66462 2.74417 7.95765C3.04423 8.25067 3.2128 8.6481 3.2128 9.0625C3.2128 9.4769 3.04423 9.87433 2.74417 10.1674C2.44411 10.4604 2.03715 10.625 1.6128 10.625H1.6C0.7168 10.625 0 9.925 0 9.0625ZM1.6 15C1.17565 15 0.768687 15.1646 0.468629 15.4576C0.168571 15.7507 0 16.1481 0 16.5625C0 16.9769 0.168571 17.3743 0.468629 17.6674C0.768687 17.9604 1.17565 18.125 1.6 18.125H1.6128C2.03715 18.125 2.44411 17.9604 2.74417 17.6674C3.04423 17.3743 3.2128 16.9769 3.2128 16.5625C3.2128 16.1481 3.04423 15.7507 2.74417 15.4576C2.44411 15.1646 2.03715 15 1.6128 15H1.6Z"
                  fill="currentColor"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div
        className={`${styles.menu} ${open ? styles.menuOpen : ""}`}
        inert={open ? undefined : true}
      >
        <div className={`container ${styles.menuInner}`}>
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
      </div>
    </header>
  );
}
