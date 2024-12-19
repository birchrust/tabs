"use client";

import { useCallback, useState } from "react";

import { Tab } from "~/components/tabs/tab";
import { Tabs } from "~/components/tabs/tabs";

interface TabState {
  label: string;
  value: string;
  notifications: string;
  tabDisabled: string;
  notificationsTotal?: string | undefined;
}

export function TabsExample({ initialStates }: { initialStates: TabState[] }) {
  const [tabStates, setTabStates] = useState<TabState[]>(initialStates);
  const [activeTab, setActiveTab] = useState("tab_5");

  const handleTabChange = useCallback((value: string) => {
    setActiveTab(value);
    setTabStates((prevStates) => {
      const updatedStates = prevStates.map((tab) =>
        tab.value === value && tab.notifications
          ? { ...tab, notifications: "false" }
          : tab,
      );

      if (JSON.stringify(updatedStates) !== JSON.stringify(prevStates)) {
        return updatedStates;
      }
      return prevStates;
    });
  }, []);
  return (
    <div className="relative">
      <div className="absolute bottom-0 h-[2px] w-full bg-[#E9E8E7]" />
      <Tabs value={activeTab} onChangeHandle={handleTabChange}>
        {tabStates.map((tab) => (
          <Tab
            key={tab.value}
            value={tab.value}
            tabDisabled={tab.tabDisabled === "true" ? true : false}
            notifications={tab.notifications}
            notificationsTotal={tab.notificationsTotal}
          >
            {tab.label}
          </Tab>
        ))}
      </Tabs>
    </div>
  );
}
