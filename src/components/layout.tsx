import { Footer } from "./footer";
import { Header } from "./header";
import { BackgroundBeams } from "./ui/background-beams";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <BackgroundBeams />
      <Header />
      <main className="sm:pt-30 mx-auto min-h-screen max-w-[730px] px-4 pb-10 pt-24">
        {children}
      </main>
      <Footer />
    </>
  );
};
