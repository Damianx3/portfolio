"use client";

import { useState } from "react";
import { experience } from "@/data/portfolio";

type Tab = keyof typeof experience;

export function ExperienceTabs() {
  const [activeTab, setActiveTab] = useState<Tab>("work");

  return (
    <div className="experience-block">
      <div className="tab-list" role="tablist" aria-label="Experience type">
        {(["work", "education"] as Tab[]).map((tab) => (
          <button key={tab} id={`${tab}-tab`} className={activeTab === tab ? "active" : undefined} onClick={() => setActiveTab(tab)} role="tab" aria-selected={activeTab === tab} aria-controls={`${tab}-panel`}>
            {tab[0].toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>
      <div className="experience-panel" id={`${activeTab}-panel`} role="tabpanel" aria-labelledby={`${activeTab}-tab`}>
        {experience[activeTab].map((item) => (
          <article className="experience-item" key={item.organization}>
            <div className="company-mark" aria-hidden="true">{item.accent}</div>
            <div className="experience-copy">
              <div className="experience-heading">
                <div><h3>{item.organization}</h3><p>{item.role}</p></div>
                <span>{item.period}</span>
              </div>
              <p className="experience-description">{item.description}</p>
              {item.bullets && (
                <ul className="experience-details">
                  {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
