interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: string;
  onChangeHandle?: (value: string) => void;
  children?: React.ReactNode;
}

interface TabProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
  tabDisabled?: boolean;
  notifications: string;
  notificationsTotal?:string
}

export type { TabsProps, TabProps };
