// Type declarations for Google Analytics gtag
interface Window {
  gtag: (...args: unknown[]) => void;
  dataLayer: Array<unknown>;
}
