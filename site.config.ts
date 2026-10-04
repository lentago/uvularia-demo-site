// site.config.ts — the ONE file you edit.
//
// Everything that makes this site yours lives here and nowhere else: where your
// published records are, your name, how to reach you, and your accent colour.
// No other file carries your identity, so there is nothing else to hunt down.

export interface SiteConfig {
  /**
   * The base URL of your records vault's `published` branch — where the vault's
   * publish workflow serves corpus-latest.json, standing.json, feed.xml, and
   * receipts/. Use EITHER:
   *   • the records repo's Pages URL:
   *       https://<org>.github.io/<org>-records/
   *   • or the raw branch URL:
   *       https://raw.githubusercontent.com/<org>/<org>-records/published/
   * A trailing slash is fine either way. This is the only link between the two
   * repositories; the site reads these files and never touches the vault itself.
   */
  publishedBaseUrl: string;

  /** Your organization's name, shown in the header and the page titles. */
  orgName: string;

  /** How a reader reaches you — an email address or a URL. Shown in the footer. */
  contact: string;

  /** Your accent colour as a hex value (e.g. "#2f6f4f"). Used for links and the header rule. */
  accent: string;

  /**
   * Where this site is served, for canonical URLs. For GitHub Pages this is your
   * org's Pages origin, e.g. "https://<org>.github.io". Optional.
   */
  site?: string;

  /**
   * The path this site is served under. On GitHub Pages a project site lives at
   * /<org>-site/, so set base to "/<org>-site". A user/organization site at the
   * domain root uses "/". Defaults to "/".
   */
  base?: string;
}

const config: SiteConfig = {
  publishedBaseUrl: "https://lentago.github.io/uvularia-demo-records/",
  orgName: "Stillwater Brook Watershed Alliance",
  contact: "clerk@stillwaterbrook.example.org",
  accent: "#2f6f4e",
  site: "https://lentago.github.io",
  base: "/uvularia-demo-site",
  askUrl: "https://kzkwvidphleik4ysswbbfs7nui0mxdww.lambda-url.us-east-1.on.aws/",
  askDisclaimer: "This assistant reports what this organization has published and when. It is not legal, financial, or professional advice, and it does not determine whether any legal requirement has been met. For that, contact the organization or your own adviser.",
};

export default config;
