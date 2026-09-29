"use client";

import { useEffect, useState } from "react";
import { categories } from "@/data/site";
import styles from "./Services.module.css";

export default function Services() {
  const [active, setActive] = useState("home");

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

  const current = categories.find((category) => category.id === active);

  return (
    <section className={styles.section} id="services">
      <div className="container">
        <div className={styles.heading}>
          <div className={styles.bar}>
            <img
              className={styles.shape}
              src="/images/titles/plate-left.svg"
              alt=""
            />
            <h2 className={styles.title}>Наші послуги</h2>
          </div>
          <p className={styles.lead}>Перевеземо те, що важливо для вас</p>
        </div>

        <div className={styles.folder}>
          <div
            className={styles.tabs}
            role="tablist"
            aria-label="Категорії послуг"
          >
            {categories.map((category) => {
              const isActive = category.id === active;

              return (
                <button
                  key={category.id}
                  id={category.id === "business" ? "business" : undefined}
                  className={`${styles.tab} ${category.id === "home" ? styles.tabHome : styles.tabBusiness} ${isActive ? styles.tabActive : ""}`}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(category.id)}
                >
                  {category.id === "home" ? (
                    <>
                      <svg
                        className={styles.cap}
                        viewBox="0 0 40 52"
                        overflow="visible"
                        aria-hidden="true"
                      >
                        <path
                          className={styles.tabFill}
                          d="M40 0 H36 A36 36 0 0 0 0 36 V52 H40 Z"
                        />
                        <path
                          className={styles.tabStroke}
                          d="M40 1 H36 A35 35 0 0 0 1 36 V51"
                        />
                      </svg>
                      <span className={styles.mid}>
                        <span className={styles.tabText}>{category.title}</span>
                      </span>
                      <svg
                        className={styles.cap}
                        viewBox="0 0 56 52"
                        overflow="visible"
                        aria-hidden="true"
                      >
                        <path
                          className={styles.tabFill}
                          d="M0 0 H8 Q22 0 28 8 L48 42 Q54 52 56 52 H0 Z"
                        />
                        <path
                          className={styles.tabStroke}
                          d="M0 1 H8 Q22 1 28 8 L48 42 Q54 51 56 51"
                        />
                      </svg>
                    </>
                  ) : (
                    <>
                      <svg
                        className={styles.cap}
                        viewBox="0 0 56 52"
                        overflow="visible"
                        aria-hidden="true"
                      >
                        <path
                          className={styles.tabFill}
                          d="M56 0 H48 Q34 0 28 8 L8 42 Q2 52 0 52 H56 Z"
                        />
                        <path
                          className={styles.tabStroke}
                          d="M56 1 H48 Q34 1 28 8 L8 42 Q2 51 0 51"
                        />
                      </svg>
                      <span className={styles.mid}>
                        <span className={styles.tabText}>{category.title}</span>
                      </span>
                      <svg
                        className={styles.cap}
                        viewBox="0 0 40 52"
                        overflow="visible"
                        aria-hidden="true"
                      >
                        <path
                          className={styles.tabFill}
                          d="M0 0 H4 A36 36 0 0 1 40 36 V52 H0 Z"
                        />
                        <path
                          className={styles.tabStroke}
                          d="M0 1 H4 A35 35 0 0 1 39 36 V51"
                        />
                      </svg>
                    </>
                  )}
                </button>
              );
            })}
          </div>

          <ul className={styles.grid} role="tabpanel">
            {current.items.map((item) => (
              <li key={item.title}>
                <article className={styles.card}>
                  <img src={item.image} alt="" />
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
