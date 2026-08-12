import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "С днём рождения, легенда!",
  description: "Небольшой сайт для очень большого поздравления.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body>{children}</body></html>;
}
