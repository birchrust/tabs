import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getAllBatchElements = (rootElement: HTMLElement): NodeList => {
  return rootElement.querySelectorAll("[data-batch-element]");
};

export const getActiveBatchItem = (batches: NodeList) => {
  let activeItem = null;

  batches.forEach((item) => {
    if ((item as HTMLElement).hasAttribute("data-focus-element")) {
      activeItem = item;
    }
  });

  return activeItem as HTMLElement | null;
};

export const getNextBatchItem = (
  batches: NodeList,
  loop = false,
): HTMLElement => {
  const activeItem = getActiveBatchItem(batches) as HTMLElement | null;

  const nextItem = activeItem?.nextElementSibling;

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
  const activeItem = getActiveBatchItem(batches) as HTMLElement | null;

  const prevItem = activeItem?.previousElementSibling;

  if (prevItem) {
    return prevItem as HTMLElement;
  }

  if (loop) {
    return batches[batches.length - 1] as HTMLElement;
  }

  return batches[0] as HTMLElement;
};
