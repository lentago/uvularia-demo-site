// site.config.ts — the ONE file you edit.
//
// Everything that makes this site yours lives here and nowhere else: where your
// published records are, your name, how to reach you, your accent colour, and
// (if you run one) where your Ask box answers.
// No other file carries your identity, so there is nothing else to hunt down.
//
// This file holds values only. What each setting means is written next to it in
// src/config-schema.ts, which the template owns: a template sync updates that
// file and never this one, and any setting it adds is optional.

import type { SiteConfig } from "./src/config-schema";

export const config: SiteConfig = {
  publishedBaseUrl: "https://lentago.github.io/uvularia-demo-records/",
  orgName: "Stillwater Brook Watershed Alliance",
  contact: "clerk@stillwaterbrook.example.org",
  accent: "#2f6f4e",
  site: "https://lentago.github.io",
  base: "/uvularia-demo-site",
  askUrl: "https://kzkwvidphleik4ysswbbfs7nui0mxdww.lambda-url.us-east-1.on.aws/",
  askDisclaimer:
    "This assistant reports what this organization has published and when. It is not legal, financial, or professional advice, and it does not determine whether any legal requirement has been met. For that, contact the organization or your own adviser.",
};
