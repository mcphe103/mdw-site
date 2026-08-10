"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";

type TurnstileWidgetId = string;

type TurnstileInstance = {
  render: (
    container: HTMLElement,
    options: {
      sitekey: string;
      action: string;
      theme: "dark";
      size: "flexible";
      callback: (token: string) => void;
      "expired-callback": () => void;
      "error-callback": () => void;
    },
  ) => TurnstileWidgetId;
  remove: (widgetId: TurnstileWidgetId) => void;
  reset: (widgetId: TurnstileWidgetId) => void;
};

declare global {
  interface Window {
    turnstile?: TurnstileInstance;
  }
}

type TurnstileProps = {
  idPrefix: string;
  resetKey: number;
  onTokenChange: (token: string | null) => void;
};

const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

export function Turnstile({ idPrefix, resetKey, onTokenChange }: TurnstileProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<TurnstileWidgetId | null>(null);
  const onTokenChangeRef = useRef(onTokenChange);
  const previousResetKey = useRef(resetKey);
  const [scriptReady, setScriptReady] = useState(false);
  const [widgetError, setWidgetError] = useState(false);

  useEffect(() => {
    onTokenChangeRef.current = onTokenChange;
  }, [onTokenChange]);

  useEffect(() => {
    if (!scriptReady || !siteKey || !containerRef.current || !window.turnstile) return;
    if (widgetIdRef.current !== null) return;

    widgetIdRef.current = window.turnstile.render(containerRef.current, {
      sitekey: siteKey,
      action: "contact_form",
      theme: "dark",
      size: "flexible",
      callback: (token) => {
        setWidgetError(false);
        onTokenChangeRef.current(token);
      },
      "expired-callback": () => onTokenChangeRef.current(null),
      "error-callback": () => {
        setWidgetError(true);
        onTokenChangeRef.current(null);
      },
    });

    return () => {
      if (widgetIdRef.current !== null && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
      }
      widgetIdRef.current = null;
    };
  }, [scriptReady]);

  useEffect(() => {
    if (previousResetKey.current === resetKey) return;
    previousResetKey.current = resetKey;

    if (widgetIdRef.current !== null && window.turnstile) {
      window.turnstile.reset(widgetIdRef.current);
      onTokenChangeRef.current(null);
    }
  }, [resetKey]);

  if (!siteKey) {
    return (
      <p role="alert" className="text-sm leading-6 text-destructive-foreground">
        Security verification is temporarily unavailable. Please try again later.
      </p>
    );
  }

  return (
    <div className="space-y-2">
      <Script
        id="cloudflare-turnstile"
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
        onReady={() => setScriptReady(true)}
        onError={() => setWidgetError(true)}
      />
      <div
        ref={containerRef}
        id={`${idPrefix}-turnstile`}
        className="min-h-[65px] w-full"
        aria-label="Security verification"
      />
      {widgetError && (
        <p role="alert" className="text-sm leading-6 text-destructive-foreground">
          Security verification could not load. Check your connection and try again.
        </p>
      )}
    </div>
  );
}
