"use client";

import Image from "next/image";
import { useState, type KeyboardEvent } from "react";

import { experience } from "@/data/portfolio";
import styles from "./experience-tabs.module.css";

type Tab = "work" | "education";

const tabs: { id: Tab; label: string }[] = [
  { id: "work", label: "Work" },
  { id: "education", label: "Education" },
];

export function ExperienceTabs() {
  const [activeTab, setActiveTab] = useState<Tab>("work");

  function handleTabKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    let next: Tab;

    switch (event.key) {
      case "ArrowLeft":
      case "ArrowRight":
        next = activeTab === "work" ? "education" : "work";
        break;
      case "Home":
        next = "work";
        break;
      case "End":
        next = "education";
        break;
      default:
        return;
    }

    event.preventDefault();
    setActiveTab(next);
    document.getElementById(`experience-${next}-tab`)?.focus();
  }

  return (
    <div className={styles.experience}>
      <div className={styles.tabs} role="tablist" aria-label="Experience category">
        {tabs.map(({ id, label }) => (
          <button
            key={id}
            className={styles.tab}
            type="button"
            id={`experience-${id}-tab`}
            role="tab"
            aria-selected={activeTab === id}
            aria-controls={`experience-${id}-panel`}
            tabIndex={activeTab === id ? 0 : -1}
            onClick={() => setActiveTab(id)}
            onKeyDown={handleTabKeyDown}
          >
            {label}
          </button>
        ))}
      </div>

      <div
        className={styles.panel}
        id={`experience-${activeTab}-panel`}
        role="tabpanel"
        aria-labelledby={`experience-${activeTab}-tab`}
        tabIndex={0}
        key={activeTab}
      >
        {experience[activeTab].map((item) => {
          const technologies = item.technologies ?? [];

          return (
            <article className={styles.entry} key={item.organization}>
              <div className={styles.logo}>
                <Image
                  className={styles.logoImage}
                  src={item.logo}
                  alt={item.logoAlt}
                  width={46}
                  height={44}
                  sizes="46px"
                />
              </div>

              <div className={styles.content}>
                <div className={styles.heading}>
                  <div className={styles.title}>
                    <h3>{item.role}</h3>
                    <p>{item.organization}</p>
                  </div>
                  <span className={styles.period}>{item.period}</span>
                </div>

                <p className={styles.description}>{item.description}</p>

                {technologies.length > 0 && (
                  <div className={styles.technologies}>
                    {technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>
                )}

                {!!item.bullets?.length && (
                  <details className={styles.accomplishments}>
                    <summary>View accomplishments</summary>
                    <ul>
                      {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                    </ul>
                  </details>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
