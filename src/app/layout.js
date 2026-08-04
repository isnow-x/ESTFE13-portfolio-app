export const metadata = {
  title: "Minimal portfolio",
  description: "The Most Fantastic and Flawless Portfolio in the World",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
