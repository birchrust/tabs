import React from "react";

export const TabsContext = React.createContext<{
  value?: string;
  onChange?: (value: string) => void;
  nextTab?: () => void;
  previousTab?: () => void;
}>({});
