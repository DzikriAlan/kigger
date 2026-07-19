import localFont from "next/font/local";

export const gtAmerica = localFont({
  src: [
    { path: "./fonts/GT-America-Trial-VF.woff2", weight: "100 900", style: "normal" },
    { path: "./fonts/GT-America-Italic-Trial-VF.woff2", weight: "100 900", style: "italic" },
  ],
  variable: "--font-gt-america",
  display: "swap",
});

export const gtAmericaMono = localFont({
  src: [{ path: "./fonts/GT-America-Mono-Trial-VF.woff2", weight: "100 900", style: "normal" }],
  variable: "--font-gt-america-mono",
  display: "swap",
});

export const gtAlpina = localFont({
  src: [
    { path: "./fonts/GT-Alpina-VAR-Trial.woff2", weight: "100 900", style: "normal" },
    { path: "./fonts/GT-Alpina-Italic-VAR-Trial.woff2", weight: "100 900", style: "italic" },
  ],
  variable: "--font-playfair",
  display: "swap",
});

export const fontVariables = `${gtAmerica.variable} ${gtAmericaMono.variable} ${gtAlpina.variable}`;
