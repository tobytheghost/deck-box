import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "box.deck",
  appName: "Deck.Box",
  webDir: "out",
  server: {
    androidScheme: "https",
  },
};

export default config;
