import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getAllBatchElements = (rootElement: HTMLElement): NodeList => {
  return rootElement.querySelectorAll("[data-batch-element]:not([disabled])");
};

export const getActiveBatchItem = (batches: NodeList) => {
  let activeItem = null;

  batches.forEach((item) => {
    if (
      (item as HTMLElement).hasAttribute("data-focus-element") &&
      !(item as HTMLElement).hasAttribute("disabled")
    ) {
      activeItem = item;
    }
  });

  return activeItem as HTMLElement | null;
};

export const getNextBatchItem = (
  batches: NodeList,
  loop = false,
): HTMLElement => {
  const activeItem = getActiveBatchItem(batches);

  let nextItem = activeItem?.nextElementSibling;

  while (nextItem && (nextItem as HTMLElement).hasAttribute("disabled")) {
    nextItem = nextItem?.nextElementSibling;
  }

  if (nextItem) {
    return nextItem as HTMLElement;
  }

  if (loop) {
    return batches[0] as HTMLElement;
  }

  return batches[batches.length - 1] as HTMLElement;
};

export const getPrevBatchItem = (
  batches: NodeList,
  loop = false,
): HTMLElement => {
  const activeItem = getActiveBatchItem(batches);

  let prevItem = activeItem?.previousElementSibling;

  while (prevItem && (prevItem as HTMLElement).hasAttribute("disabled")) {
    prevItem = prevItem?.previousElementSibling;
  }

  if (prevItem) {
    return prevItem as HTMLElement;
  }

  if (loop) {
    return batches[batches.length - 1] as HTMLElement;
  }

  return batches[0] as HTMLElement;
};
