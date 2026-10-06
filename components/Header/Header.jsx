"use client";

import { useEffect, useRef, useState } from "react";
import { menu } from "@/data/site";
import CallButton from "@/components/CallButton/CallButton";
import Logo from "@/components/Logo/Logo";
import Messengers from "@/components/Messengers/Messengers";
import styles from "./Header.module.css";

const DRIVE_OUT_MS = 900;
const DRIVE_PARK_MS = 360;
const DRIVE_BACK_MS = 2400;
const TINT_MS = 2500;
const LINK_GAP = 80;

export default function Header() {
  const [open, setOpen] = useState(false);
  const [phase, setPhase] = useState("idle");
  const [tint, setTint] = useState(false);
  const [shift, setShift] = useState(0);
  const logoRef = useRef(null);
  const navRef = useRef(null);

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

  const measureDrive = () => {
    const logo = logoRef.current;
    const link = navRef.current?.querySelector("a");
    const bar = logo?.offsetParent;
    if (!logo || !link || !(bar instanceof HTMLElement)) return 0;

    const barLeft = bar.getBoundingClientRect().left;
    const linkLeft = link.getBoundingClientRect().left - barLeft;
    const logoRight = logo.offsetLeft + logo.offsetWidth;
    return Math.max(0, Math.round(linkLeft - logoRight - LINK_GAP));
  };

  useEffect(() => {
    const update = () => setShift(measureDrive());
    update();
    document.fonts?.ready.then(update);
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    if (phase !== "out") return undefined;
    const id = window.setTimeout(() => setPhase("back"), DRIVE_OUT_MS + DRIVE_PARK_MS);
    return () => window.clearTimeout(id);
  }, [phase]);

  useEffect(() => {
    if (phase !== "back") return undefined;
    const id = window.setTimeout(() => setPhase("idle"), DRIVE_BACK_MS);
    return () => window.clearTimeout(id);
  }, [phase]);

  useEffect(() => {
    if (!tint) return undefined;
    const id = window.setTimeout(() => setTint(false), TINT_MS);
    return () => window.clearTimeout(id);
  }, [tint]);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1440px)");
    const onChange = () => {
      if (media.matches) setOpen(false);
      if (!media.matches) {
        setPhase("idle");
        setTint(false);
      }
    };

    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  const closeMenu = () => setOpen(false);

  const onLogoClick = (event) => {
    if (window.matchMedia("(min-width: 1440px)").matches) {
      event.preventDefault();
      if (phase !== "idle") return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const distance = measureDrive();
      if (distance < 8) return;
      setShift(distance);
      setTint(true);
      setPhase("out");
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
            className={`${styles.logoLink} ${phase === "back" ? styles.logoBack : ""}`}
            href="#top"
            style={{
              "--drive": `${phase === "out" ? shift : 0}px`,
              "--drive-ms": `${phase === "back" ? DRIVE_BACK_MS : DRIVE_OUT_MS}ms`,
            }}
            aria-label="Беремо й веземо"
            aria-expanded={phase !== "idle"}
            onClick={onLogoClick}
          >
            <Logo driving={phase !== "idle"} />
          </a>

          <nav
            ref={navRef}
            className={`${styles.nav} ${tint ? styles.navDriven : ""}`}
            aria-label="Головне меню"
          >
            <ul className={styles.navList}>
              {menu.map((item, index) => (
                <li key={item.href}>
                  <a href={item.href} style={{ "--lag": `${0.75 + index * 0.2}s` }}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <span className={styles.callSlot}>
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
