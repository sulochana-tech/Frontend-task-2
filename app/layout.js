import "./globals.css";

export const metadata = {
  title: "Frontend Task",
  description: "Next.js Assignment",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;