import "./globals.css";
import { Sidebar } from "@/components";
import { get } from "@vercel/edge-config";

export const metadata = {
  title: "Minh Thu Resume",
  description: "Created by Antonio",
  icons: {
    icon: [{ url: "/favicon.ico" }],
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const personalData = await get("personalData");

  return (
    <html lang="en">
      <body className="flex flex-col sm:flex-row font-serif">
        <Sidebar data={Object(personalData)} />
        <main className="w-full p-8 sm:p-16 sm:w-2/3 ml-auto">{children}</main>
      </body>
    </html>
  );
}
