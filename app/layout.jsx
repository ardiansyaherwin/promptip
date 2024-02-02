import "@/styles/globals.css";
import Nav from "@/components/Nav";
import Provider from "@/components/Provider";
import NextTopLoader from "nextjs-toploader";

export const metadata = {
  title: "Promptip",
  description: "Save Yours and Discover others AI Prompts Online for Free",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <NextTopLoader color="#ec4899" showSpinner={false} />
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
