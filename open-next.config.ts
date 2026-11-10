import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// Every page is prerendered at build time and nothing revalidates, so the
// default config is enough — no R2/KV incremental cache is needed.
export default defineCloudflareConfig();
