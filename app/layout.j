export const metadata = {
  title: "Second Chance",
  description: "Luxury Second-Hand Fashion",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
