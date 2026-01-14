import Script from "next/script";

export default function Analytics() {
  return <Script src="/analytics.js" strategy="afterInteractive" />;
}
