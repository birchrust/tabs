"use client";

import React from "react";

import { useRef } from "react";
import { TabsContext } from "~/components/tabs/tab-context";

import { cn, getAllBatchElements } from "~/lib/utils";
import { getNextBatchItem, getPrevBatchItem } from "~/lib/utils";

import type { TabsProps } from "~/components/tabs/types";

export function Tabs({
  value,
  onChangeHandle,
  children,
  className,
  ...props
}: TabsProps) {
  const tabsRef = useRef<HTMLDivElement>(null);

  const nextTab = () => {
    if (!tabsRef.current) return;
    const batches = getAllBatchElements(tabsRef?.current);
    const nextItem = getNextBatchItem(batches);

    nextItem.focus();
  };

  const previousTab = () => {
    if (!tabsRef.current) return;
    const batches = getAllBatchElements(tabsRef?.current);
    const prevItem = getPrevBatchItem(batches);
    prevItem.focus();
  };

  return (
    <TabsContext.Provider
      value={{ value, onChange: onChangeHandle, nextTab, previousTab }}
    >
      <div
        ref={tabsRef}
        role="tablist"
        className={cn("inline-flex items-center gap-5", className)}
        {...props}
      >
        {children}
      </div>
    </TabsContext.Provider>
  );
}
