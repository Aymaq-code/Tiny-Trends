"use client";

import { useEffect } from "react";

export function useLockBodyScroll(isLocked: boolean): void {
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = isLocked ? "hidden" : originalOverflow;

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isLocked]);
}
