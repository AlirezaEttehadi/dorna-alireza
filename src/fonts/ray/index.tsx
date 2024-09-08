import localFont from "next/font/local";

const RayFont = localFont({
  src: [
    {
      path: "./Ray_Light.@zero_font.ttf",
      weight: "300",
    },
    {
      path: "./Ray_Bold.@zero_font.ttf",
      weight: "600",
    },
    {
      path: "./Ray_ExtraBold.@zero_font.ttf",
      weight: "700",
    },
    {
      path: "./Ray_Black.@zero_font.ttf",
      weight: "800",
    },
    {
      path: "./Ray_ExtraBlack.@zero_font.ttf",
      weight: "900",
    },
  ],
});

export default RayFont;
