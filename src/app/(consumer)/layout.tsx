import Header from "@/components/modules/layout/header/header";
import Footer from "@/components/modules/layout/footer/footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
