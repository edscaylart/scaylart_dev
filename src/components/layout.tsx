import { Seo } from "./seo";

interface ILayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: ILayoutProps) => {
  return (
    <>
      <Seo />

      <main className="mx-auto min-h-screen max-w-[640px] px-4 pt-24 pb-10 sm:pt-40">
        {children}
      </main>
    </>
  )
}