"use client";

import { useCallback, useState } from "react";

import { Tab, Tabs } from "~/components/tabs/tabs";

interface TabState {
  label: string;
  value: string;
  notifications: string;
  tabDisabled: string;
}

const initialStates = [
  {
    label: "Tab",
    value: "tab_1",
    notifications: "false",
    tabDisabled: "false",
  },
  {
    label: "Tab",
    value: "tab_2",
    notifications: "true",
    tabDisabled: "false",
  },
  {
    label: "Tab",
    value: "tab_3",
    notifications: "false",
    tabDisabled: "false",
  },
  {
    label: "Tab",
    value: "tab_4",
    notifications: "false",
    tabDisabled: "true",
  },
  {
    label: "Tab",
    value: "tab_5",
    notifications: "false",
    tabDisabled: "true",
  },
  {
    label: "Tab",
    value: "tab_6",
    notifications: "true",
    tabDisabled: "false",
  },
  {
    label: "Tab",
    value: "tab_7",
    notifications: "false",
    tabDisabled: "false",
  },
  {
    label: "Tab",
    value: "tab_8",
    notifications: "false",
    tabDisabled: "false",
  },
  {
    label: "Tab",
    value: "tab_9",
    notifications: "false",
    tabDisabled: "false",
  },
  {
    label: "Tab",
    value: "tab_10",
    notifications: "false",
    tabDisabled: "false",
  },
];

export default function HomePage() {
  const [tabStates, setTabStates] = useState<TabState[]>(initialStates);
  const [activeTab, setActiveTab] = useState(
    initialStates[0]?.value ?? "tab_1",
  );

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
    <main className="flex min-h-screen flex-col items-center">
      <div className="container flex flex-1 items-center justify-center px-10">
        <div className="relative">
          <div className="absolute bottom-0 h-[2px] w-full bg-[#E9E8E7]" />
          <Tabs value={activeTab} onChangeHandle={handleTabChange}>
            {tabStates.map((tab) => (
              <Tab
                key={tab.value}
                value={tab.value}
                tabDisabled={tab.tabDisabled === "true" ? true : false}
                notifications={tab.notifications}
              >
                {tab.label}
              </Tab>
            ))}
          </Tabs>
        </div>
      </div>
    </main>
  );
}
