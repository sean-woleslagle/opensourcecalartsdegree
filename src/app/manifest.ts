import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Open-Source CalArts Degree",
    short_name: "CalArts Degree",
    description:
      "Independent open-source animation curriculum checklist with synced progress.",
    start_url: "/",
    display: "standalone",
    background_color: "#e6ebe4",
    theme_color: "#e6ebe4",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
