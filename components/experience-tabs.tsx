
"use client";

import Image from "next/image";
import { useState } from "react";

import { experience } from "@/data/portfolio";

type Tab = keyof typeof experience;

const tabs: { id: Tab; label: string }[] = [
  { id: "work", label: "Work" },
  { id: "education", label: "Education" },
];

const techByOrganization: Record<string, string[]> = {
  "Texas Manufacturing Assistance Center": [
    "Next.js",
    "FastAPI",
    "PostgreSQL",
  ],
  "Brownsville Public Utilities Board": [
    "Power BI",
    "DAX",
    "Power Query",
  ],
};

const sans = "Inter, ui-sans-serif, system-ui, sans-serif";

export function ExperienceTabs() {
  const [activeTab, setActiveTab] = useState<Tab>("work");

  return (
    <div
      className="experience-v3"
      style={{
        width: "100%",
        minWidth: 0,
      }}
    >
      {/* Small, restrained tab navigation */}
      <div
        role="tablist"
        aria-label="Experience category"
        style={{
          display: "inline-flex",
          gap: "4px",
          padding: "4px",
          marginBottom: "28px",
          background: "var(--panel)",
          border: "1px solid var(--line)",
          borderRadius: "7px",
        }}
      >
        {tabs.map((tab) => {
          const selected = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              type="button"
              id={`experience-${tab.id}-tab`}
              role="tab"
              aria-selected={selected}
              aria-controls={`experience-${tab.id}-panel`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActiveTab(tab.id)}
              onKeyDown={(event) => {
                if (
                  event.key !== "ArrowLeft" &&
                  event.key !== "ArrowRight"
                ) {
                  return;
                }

                event.preventDefault();

                const next =
                  activeTab === "work"
                    ? "education"
                    : "work";

                setActiveTab(next);

                document
                  .getElementById(`experience-${next}-tab`)
                  ?.focus();
              }}
              style={{
                minHeight: "36px",
                padding: "7px 16px",
                border: "1px solid",
                borderColor: selected
                  ? "var(--line)"
                  : "transparent",
                borderRadius: "5px",
                background: selected
                  ? "var(--bg-deep)"
                  : "transparent",
                color: selected
                  ? "var(--green)"
                  : "var(--muted)",
                fontFamily: sans,
                fontSize: "12px",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Entries are aligned to one vertical column */}
      <div
        id={`experience-${activeTab}-panel`}
        role="tabpanel"
        aria-labelledby={`experience-${activeTab}-tab`}
        tabIndex={0}
        key={activeTab}
        style={{
          width: "100%",
          borderTop: "1px solid var(--line)",
        }}
      >
        {experience[activeTab].map((item) => {
          const technologies =
            techByOrganization[item.organization] ?? [];

          return (
            <article
              key={item.organization}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "18px",
                padding: "26px 0",
                borderBottom: "1px solid var(--line)",
              }}
            >
              {/* Company or university logo */}
              <div
                style={{
                  flex: "0 0 58px",
                  width: "58px",
                  height: "58px",
                  display: "grid",
                  placeItems: "center",
                  padding: "7px",
                  background: "#f7f8f5",
                  border: "1px solid var(--line)",
                  borderRadius: "7px",
                }}
              >
                <Image
                  src={item.logo}
                  alt={item.logoAlt}
                  width={46}
                  height={44}
                  sizes="46px"
                  style={{
                    display: "block",
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    filter: "none",
                  }}
                />
              </div>

              {/* Main content */}
              <div
                style={{
                  flex: "1 1 0",
                  minWidth: 0,
                }}
              >
                {/* Role and date */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: "8px 18px",
                    flexWrap: "wrap",
                  }}
                >
                  <div style={{ minWidth: 0 }}>
                    <h3
                      style={{
                        margin: 0,
                        color: "var(--text)",
                        fontFamily: sans,
                        fontSize: "15px",
                        fontWeight: 650,
                        lineHeight: 1.5,
                        letterSpacing: "-0.025em",
                      }}
                    >
                      {item.role}
                    </h3>

                    <p
                      style={{
                        margin: "3px 0 0",
                        color: "var(--green)",
                        fontFamily: sans,
                        fontSize: "12px",
                        lineHeight: 1.5,
                      }}
                    >
                      {item.organization}
                    </p>
                  </div>

                  <time
                    style={{
                      color: "var(--faint)",
                      fontFamily: "var(--mono)",
                      fontSize: "10px",
                      whiteSpace: "nowrap",
                      paddingTop: "4px",
                    }}
                  >
                    {item.period}
                  </time>
                </div>

                {/* One-sentence overview */}
                <p
                  style={{
                    margin: "13px 0 0",
                    maxWidth: "580px",
                    color: "var(--muted)",
                    fontFamily: sans,
                    fontSize: "13px",
                    lineHeight: 1.75,
                  }}
                >
                  {item.description}
                </p>

                {/* Small technical labels */}
                {technologies.length > 0 && (
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "7px",
                      marginTop: "14px",
                    }}
                  >
                    {technologies.map((tech) => (
                      <span
                        key={tech}
                        style={{
                          padding: "4px 8px",
                          background: "var(--panel)",
                          border: "1px solid var(--line)",
                          borderRadius: "4px",
                          color: "var(--muted)",
                          fontFamily: sans,
                          fontSize: "10px",
                          lineHeight: 1.5,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {/* Optional expandable accomplishments */}
                {item.bullets && item.bullets.length > 0 && (
                  <details
                    style={{
                      marginTop: "16px",
                      color: "var(--muted)",
                    }}
                  >
                    <summary
                      style={{
                        display: "list-item",
                        cursor: "pointer",
                        color: "var(--green)",
                        fontFamily: sans,
                        fontSize: "12px",
                        fontWeight: 600,
                      }}
                    >
                      View accomplishments
                    </summary>

                    <ul
                      style={{
                        margin: "13px 0 0",
                        paddingLeft: "18px",
                        maxWidth: "600px",
                        color: "var(--muted)",
                        fontFamily: sans,
                        fontSize: "12px",
                        lineHeight: 1.8,
                      }}
                    >
                      {item.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          style={{
                            marginBottom: "9px",
                          }}
                        >
                          {bullet}
                        </li>
                      ))}
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
