export function getSiteUrl() {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  // Keep public metadata on the production domain, including preview builds.
  return new URL(configuredUrl || "https://damian-portfolio.com");
}
