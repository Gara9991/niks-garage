// Lightweight analytics helper — no performance impact, fire-and-forget

type EventParams = Record<string, string | number | boolean>;

export function trackEvent(action: string, params?: EventParams) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", action, params);
  }
}

// Pre-built helpers for common interactions
export const analytics = {
  // CTA / Button clicks
  clickCTA: (label: string, location: string) =>
    trackEvent("cta_click", { label, location }),

  // Phone call clicks
  clickPhone: (number: string, location: string) =>
    trackEvent("phone_click", { number, location }),

  // Email clicks
  clickEmail: (location: string) =>
    trackEvent("email_click", { location }),

  // Navigation clicks
  clickNav: (label: string) =>
    trackEvent("nav_click", { label }),

  // FAB interactions
  fabOpen: () => trackEvent("fab_open"),
  fabClose: () => trackEvent("fab_close"),

  // Service category viewed
  viewService: (category: string) =>
    trackEvent("service_view", { category }),

  // Scroll to section
  scrollToSection: (section: string) =>
    trackEvent("section_scroll", { section }),

  // External link clicks
  clickExternal: (url: string, label: string) =>
    trackEvent("external_click", { url, label }),

  // Theme toggle
  toggleTheme: (theme: string) =>
    trackEvent("theme_toggle", { theme }),

  // Hero slide interaction
  heroSlideChange: (slideIndex: number) =>
    trackEvent("hero_slide_change", { slide_index: slideIndex }),

  // Form submissions (for Kontakt page)
  formSubmit: (formName: string) =>
    trackEvent("form_submit", { form_name: formName }),
};
