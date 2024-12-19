"use client";

import React from "react";

import { useRef, useState } from "react";
import { TabsContext } from "~/components/tabs/tab-context";

import { cn } from "~/lib/utils";

import type { TabProps } from "~/components/tabs/types";

export function Tab({
  value,
  children,
  className,
  tabDisabled,
  notifications,
  notificationsTotal,
  ...props
}: TabProps) {
  const ref = useRef<HTMLButtonElement>(null);

  const context = React.useContext(TabsContext);
  const isSelected = context.value === value;

  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleClick = () => {
    if (context.onChange) {
      context.onChange(value);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key == "ArrowLeft") {
      if (!context.previousTab) return;
      context.previousTab();
    }

    if (event.key == "ArrowRight") {
      if (!context.nextTab) return;
      context.nextTab();
    }

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleClick();
    }
  };

  return (
    <button
      ref={ref}
      role="tab"
      aria-selected={isSelected}
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className={cn(
        "group relative flex gap-1 text-[#909090] outline-none transition-colors",
        !tabDisabled && "hover:text-[#3B3B3B]",
        isSelected && "text-[#0A0D14]",
        tabDisabled && "cursor-not-allowed border-[#D2D1D0] text-[#D2D1D0]",
        "focus-visible:rounded-[3px] focus-visible:shadow-[0_0_0_2px_#FFFFFF,_0_0_0_4px_#E3E5EC]",
      )}
      onFocus={() => handleFocus()}
      onBlur={handleBlur}
      disabled={tabDisabled}
      {...(isFocused ? { "data-focus-element": "" } : {})}
      {...props}
      data-batch-element
    >
      <div
        className={cn(
          "h-[32px] gap-2.5 pb-2",
          isSelected && "border-b-[2px] border-[#0A0D14]",
          tabDisabled && "border-[#D2D1D0]",
        )}
      >
        <span
          className={cn(
            "relative h-[24px] w-[25px] text-left text-[17px] font-normal leading-[24px] outline-none transition-colors",
            className,
          )}
        >
          {children}
        </span>
      </div>
      <div>
        {notifications === "true" ? (
          <div className="flex items-start">
            {notificationsTotal ? (
              <span className="text-[10px] font-normal">
                {notificationsTotal}
              </span>
            ) : (
              <div className="h-[6px] w-[6px] rounded-full bg-[#ED2B2B]" />
            )}
          </div>
        ) : null}
      </div>
    </button>
  );
}
