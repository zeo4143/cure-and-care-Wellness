import React, { useState } from "react";
import Styles from "./TabLayout.module.css";

const TabLayout = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);
  const handleClick = (e) => setActiveTab(e.target.value);
  return (
    <>
      <div className={Styles.tabs}>
        {tabs.map((tab) => (
          <button
            className={`${activeTab == tab.id ? Styles.active : ""} ${Styles.button}`}
            value={tab.id}
            onClick={handleClick}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className={Styles.content}>{tabs[activeTab].content}</div>
    </>
  );
};

export default TabLayout;
