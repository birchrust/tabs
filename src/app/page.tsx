import { TabsExample } from "./_components/tabs-example";

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
    notificationsTotal: "200",
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
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="container flex flex-1 items-center justify-center px-10">
        <TabsExample initialStates={initialStates} />
      </div>
    </main>
  );
}
