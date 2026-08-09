"use client";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackInquirySuccess(topic: string) {
  window.gtag?.("event", "generate_lead", {
    method: "project_inquiry",
    inquiry_topic: topic,
  });
}
