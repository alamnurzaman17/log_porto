import localFont from "next/font/local";

const satoshi = localFont({
  src: [
    {
      path: "../../public/fonts/satoshi/Satoshi-Variable.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/satoshi/Satoshi-VariableItalic.ttf",
      weight: "100",
      style: "italic",
    },
    {
      path: "../../public/fonts/satoshi/Satoshi-Variable.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/satoshi/Satoshi-VariableItalic.ttf",
      weight: "200",
      style: "italic",
    },
    {
      path: "../../public/fonts/satoshi/Satoshi-Variable.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/satoshi/Satoshi-VariableItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/fonts/satoshi/Satoshi-Variable.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/satoshi/Satoshi-VariableItalic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/satoshi/Satoshi-Variable.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/satoshi/Satoshi-VariableItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/fonts/satoshi/Satoshi-Variable.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/satoshi/Satoshi-VariableItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../public/fonts/satoshi/Satoshi-Variable.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/satoshi/Satoshi-VariableItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../public/fonts/satoshi/Satoshi-Variable.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/satoshi/Satoshi-Variable.ttf",
      weight: "800",
      style: "italic",
    },
    {
      path: "../../public/fonts/satoshi/Satoshi-Variable.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../public/fonts/satoshi/Satoshi-Variable.ttf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-satoshi",
});

const lato = localFont({
  src: [
    {
      path: "../../public/fonts/lato/Lato-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/lato/Lato-ThinItalic.ttf",
      weight: "100",
      style: "italic",
    },
    {
      path: "../../public/fonts/lato/Lato-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/lato/Lato-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/fonts/lato/Lato-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/lato/Lato-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/lato/Lato-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/lato/Lato-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../public/fonts/lato/Lato-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../public/fonts/lato/Lato-BlackItalic.ttf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-lato",
});

export { satoshi, lato };
