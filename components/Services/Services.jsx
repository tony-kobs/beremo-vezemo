"use client";

import { useEffect, useRef, useState } from "react";
import { categories } from "@/data/site";
import heading from "@/styles/sectionHeading.module.css";
import plate from "@/styles/titlePlate.module.css";
import styles from "./Services.module.css";

export default function Services() {
  const [active, setActive] = useState("home");
  const [panelDir, setPanelDir] = useState("fromRight");
  const prevActive = useRef(active);

  useEffect(() => {
    const syncTab = () => {
      if (window.location.hash === "#business") {
        setActive("business");
      }

      if (window.location.hash === "#services") {
        setActive("home");
      }
    };

    syncTab();
    window.addEventListener("hashchange", syncTab);
    return () => window.removeEventListener("hashchange", syncTab);
  }, []);

  useEffect(() => {
    if (prevActive.current === active) return;
    setPanelDir(active === "business" ? "fromRight" : "fromLeft");
    prevActive.current = active;
  }, [active]);

  const current = categories.find((category) => category.id === active);

  const selectTab = (id) => {
    if (id === active) return;
    setPanelDir(id === "business" ? "fromRight" : "fromLeft");
    setActive(id);

    const nextHash = id === "business" ? "#business" : "#services";
    if (window.location.hash !== nextHash) {
      window.history.replaceState(null, "", nextHash);
    }
  };

  return (
    <section className={styles.section} id="services">
      <div className={styles.container}>
        <div className={`${heading.block} ${heading.alignEnd} ${styles.heading}`}>
          <div className={`${heading.bar} ${plate.plateBase} ${plate.rightPlate}`}>
            <h2 className={`${heading.title} ${styles.title}`}>Наші послуги</h2>
          </div>
          <p className={`${heading.lead} ${heading.leadAccent}`}>
            Перевеземо те, що важливо для вас
          </p>
        </div>

        <div className={styles.folder}>
          <div
            className={styles.tabs}
            role="tablist"
            aria-label="Категорії послуг"
          >
            {categories.map((category) => {
              const isActive = category.id === active;
              const isHome = category.id === "home";

              return (
                <button
                  key={category.id}
                  id={category.id}
                  className={`${styles.tab} ${isHome ? styles.tabHome : styles.tabBusiness} ${isActive ? styles.tabActive : ""}`}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="services-panel"
                  onClick={() => selectTab(category.id)}
                >
                  <span className={styles.tabText}>{category.title}</span>
                </button>
              );
            })}
          </div>

          <ul
            key={active}
            className={`${styles.grid} ${panelDir === "fromRight" ? styles.gridFromRight : styles.gridFromLeft}`}
            id="services-panel"
            role="tabpanel"
            aria-labelledby={active}
          >
            {current.items.map((item, index) => (
              <li
                key={item.title}
                className={styles.gridItem}
                style={{ "--i": index }}
              >
                <article className={styles.card}>
                  <img
                    src={item.image}
                    alt={`${item.title} — вантажні перевезення, Зеленодольськ`}
                    loading="lazy"
                    decoding="async"
                    width={640}
                    height={800}
                  />
                  <div className={styles.cardBody}>
                    <h3 className={styles.cardTitle}>{item.title}</h3>
                    <p className={styles.cardText}>{item.text}</p>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
