// Centralized EmailJS configuration.
// Preferred: set these via Vite env vars in your .env file.
// Fallbacks: localStorage (useful when .env isn't loading in dev) or window globals.

const envServiceId = import.meta?.env?.VITE_EMAILJS_SERVICE_ID as string | undefined;
const envTemplateId = import.meta?.env?.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
const envPublicKey = import.meta?.env?.VITE_EMAILJS_PUBLIC_KEY as string | undefined;

// Optional fallbacks so you can set keys in the browser console:
// localStorage.setItem('VITE_EMAILJS_SERVICE_ID', '...') etc.
let lsServiceId: string | undefined;
let lsTemplateId: string | undefined;
let lsPublicKey: string | undefined;
if (typeof window !== "undefined") {
  try {
    lsServiceId = window.localStorage.getItem("VITE_EMAILJS_SERVICE_ID") ?? undefined;
    lsTemplateId = window.localStorage.getItem("VITE_EMAILJS_TEMPLATE_ID") ?? undefined;
    lsPublicKey = window.localStorage.getItem("VITE_EMAILJS_PUBLIC_KEY") ?? undefined;
  } catch (_) {}
}

// Global window override (e.g., window.__EMAILJS__ = { serviceId: '...', templateId: '...', publicKey: '...' })
const winAny = typeof window !== "undefined" ? (window as any) : undefined;
const winCfg = winAny?.__EMAILJS__ as
  | { serviceId?: string; templateId?: string; publicKey?: string }
  | undefined;

let source: "env" | "localStorage" | "window" | "none" = "none";
const serviceIdVal = envServiceId ?? lsServiceId ?? winCfg?.serviceId ?? "";
const templateIdVal = envTemplateId ?? lsTemplateId ?? winCfg?.templateId ?? "";
const publicKeyVal = envPublicKey ?? lsPublicKey ?? winCfg?.publicKey ?? "";

if (envServiceId || envTemplateId || envPublicKey) source = "env";
else if (lsServiceId || lsTemplateId || lsPublicKey) source = "localStorage";
else if (winCfg?.serviceId || winCfg?.templateId || winCfg?.publicKey) source = "window";
else source = "none";

export const EMAILJS_CONFIG = {
  serviceId: serviceIdVal,
  templateId: templateIdVal,
  publicKey: publicKeyVal,
};
export const EMAILJS_SOURCE = source;

if (!EMAILJS_CONFIG.serviceId || !EMAILJS_CONFIG.templateId || !EMAILJS_CONFIG.publicKey) {
  // Helpful debug output in dev to confirm what the app sees
  // eslint-disable-next-line no-console
  console.warn("⚠️ Missing EmailJS configuration. Please check .env, localStorage, or window.__EMAILJS__.", {
    fromEnv: {
      serviceId: !!envServiceId,
      templateId: !!envTemplateId,
      publicKey: !!envPublicKey,
    },
    fromLocalStorage: {
      serviceId: !!lsServiceId,
      templateId: !!lsTemplateId,
      publicKey: !!lsPublicKey,
    },
    fromWindow: !!winCfg,
  });
} else {
  // eslint-disable-next-line no-console
  console.info("EmailJS config loaded", { source });
}



