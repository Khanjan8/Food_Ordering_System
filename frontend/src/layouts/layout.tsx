import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
<<<<<<< HEAD

type Props = {
  children: React.ReactNode;
  showHero?: boolean;
};

const Layout = ({ children, showHero = false }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {showHero && <Hero />}
      <div className="container mx-auto flex-1 py-10">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
=======
import HomePage from "@/pages/HomePage";

type Props = {
    children: React.ReactNode;
};

const Layout = ({children}: Props) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <Hero/>
            <HomePage/>
            <div className="container mx-auto flex-1 py-10">{children}</div>
            <Footer/>
        </div>
    );
};

export default Layout;
>>>>>>> a22d48b3e81942e9dd2e35385802a6d7ba870e2b
